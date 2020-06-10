import {
  AfterContentInit, AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Bar, Range, Tuple} from "../../../model/Range";
import {FilterValue} from "../../../utils/Filter";
import {RangeFilterViewComponent} from "../../mobile/smart/range-filter-view/range-filter-view.component";


@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RangeFilterComponent implements OnInit {
  @Input() pricePerGramState: Tuple<number, number>[] = [];
  @Input() disabled: boolean = false;
  @Output() onRangeSelectionChanged: EventEmitter<Range> = new EventEmitter<Range>();
  graphBars: Bar[] = [];
  max: number;
  min: number;
  currentSelectedRange: number[] = [];
  currentFromPercent: number; // TODO: renderle variabili locali
  currentToPercent: number; // TODO: renderle variabili locali
  valuesRange: Range = new Range(1, 90); // range di partenza
  prices: Array<number> = [];
  frequencies: Array<number> = [];
  sortedPrices: Array<number> = [];   // TODO: renderle variabili locali
  sortedFrequencies: Array<number> = [];   // TODO: renderle variabili locali
  normalizedPrices: Array<number> = [];
  normalizedFrequencies: Array<number> = [];

  constructor(private rangeFilterSmartComponent: RangeFilterViewComponent) {

    // Fake
    this.pricePerGramState.push(new Tuple<number, number>(11.9, 25));
    this.pricePerGramState.push(new Tuple<number, number>(0.1, 15));
    this.pricePerGramState.push(new Tuple<number, number>(2.8, 41));
    this.pricePerGramState.push(new Tuple<number, number>(5.4, 15));
    this.pricePerGramState.push(new Tuple<number, number>(10.9, 4));
    this.pricePerGramState.push(new Tuple<number, number>(13.9, 4));
    this.pricePerGramState.push(new Tuple<number, number>(22.8, 38));
    this.pricePerGramState.push(new Tuple<number, number>(33.1, 29));
    this.pricePerGramState.push(new Tuple<number, number>(37.1, 70));
    this.pricePerGramState.push(new Tuple<number, number>(20.1, 83));
    this.pricePerGramState.push(new Tuple<number, number>(45.5, 53));
    this.pricePerGramState.push(new Tuple<number, number>(13.1, 83));
    this.pricePerGramState.push(new Tuple<number, number>(29.8, 38));
    this.pricePerGramState.push(new Tuple<number, number>(35.1, 1));
    this.pricePerGramState.push(new Tuple<number, number>(3.4, 110));
    this.pricePerGramState.push(new Tuple<number, number>(5.4, 59));
    this.pricePerGramState.push(new Tuple<number, number>(7.9, 4));

    this.pricePerGramState.forEach(t => {
      this.prices.push(t.first);
      this.frequencies.push(t.second);
    })

    this.sortedPrices = this.prices.sort(this.comparator);
    this.sortedFrequencies = this.frequencies.sort(this.comparator);

    this.min = Math.min(...this.sortedPrices);
    this.currentSelectedRange[0] = this.min;
    this.max = Math.max(...this.sortedPrices);

    this.currentSelectedRange[1] = this.max;

    this.normalizedPrices = this._normalizzaArray(this.sortedPrices);
    this.normalizedFrequencies = this._normalizzaArray(this.sortedFrequencies);

    this._initBars();

    console.info('Graph bars: ');
    console.info(this.graphBars);

    console.log('======= INIZIALIZZATO =======')
    console.log(this.pricePerGramState)

  }


  ngOnInit(): void {
  }


  comparator(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }


  // crea i tagli di range delle barre verticali. In questo caso 50 barre da 2% ciascuno
  private _initBars() {
    let j = 0;
    let f = 0;
    for (let i = 0; i < 50; i++) {
      let range = new Range(j, j + 2);
      j = j + 2;
      let frequency = 0;
      while (this.isBetween(this.normalizedPrices[f] * 100, range)) {
        frequency += this.normalizedFrequencies[f] * 100; // frequenze nello stesso range si sommano
        f++;
      }
      this.graphBars[i] = new Bar(range, frequency);
    }
  }

  private isBetween(number: number, range: Range): boolean {
    return range.from <= number && number <= range.to;
  }


  onRangeSelectedChange() {
    let from = this.currentSelectedRange[0];
    let to = this.currentSelectedRange[1];

    // normalizza i nuovi range
    this.currentFromPercent = this._percentage(from, this.min, this.max);
    this.currentToPercent = this._percentage(to, this.min, this.max);
    let currentToPercentFixed = (this.currentToPercent * 100) > 99 ? 100 : (this.currentToPercent * 100); // piccola forzatura...non so perchè ma si blocca a 0.9923076 e non tocca mai quota 100

    console.log('Range normalizzato: [' + this.currentFromPercent * 100 + '] ----> [' + currentToPercentFixed + ']');
   // this.rangeFilterSmartComponent.updateRange(new Range(this.currentFromPercent * 100, currentToPercentFixed));
  }


  onSlideEnd(event: any) {
    let from = this.currentSelectedRange[0];
    let to = this.currentSelectedRange[1];

    if (from == this.min || to == this.max) {
      this.onRangeSelectionChanged.emit(new Range(
        from == this.min ? FilterValue.UNSET_FILTER : from,
        to == this.max ? FilterValue.UNSET_FILTER : to
        )
      )
    } else {
      this.onRangeSelectionChanged.emit(new Range(from, to))
    }

  }


  private _normalizzaArray(array: Array<number>): Array<number> {
    let resultArray: Array<number> = [];
    let min = Math.min(...array);
    let max = Math.max(...array);

    array.forEach(e => {
      resultArray.push(
        this._percentage(e, min, max));
    })
    return resultArray;
  }


  /** Calcola la percentuale che value assume nel range tra 'a' e 'b' */
  private _percentage(value: number, a: number, b: number) {
    let percentage = ((value || 0) - a) / (b - a);
    // return this._clamp(percentage);
    return percentage;
  }

  private _clamp(value: number, min = 0, max = 1) {
    return Math.max(min, Math.min(value, max));
  }


  // --------- TESTING ----------


  /* Crea una mappa di dimensione inclusa tra min e max e popolata da numeri randomici (float -> int)
  * Es:
  * 3.4 --> 40 tè
  * 11.3 --> 12 tè
  * 3.45 --> 1 tè
  * */
  createfakeData(min: number, max: number): Map<number, number> {
    let mappa = new Map<number, number>();
    let mapLength = this.randomIntegerFrom(min, max);

    for (let i = 0; i < mapLength; i++) {
      mappa.set(this.randomNumber(0, 100), this.randomIntegerFrom(0, 500))
    }
    console.log('MAPPA CREATA ===> ' + mappa);
    return mappa;
  }

  // Genera un numero random da min a max
  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }


  randomIntegerFrom(min, max) {
    const fractionMultiplier = Math.pow(10, 0) // lo '0' mi permette di avere solo interi
    return Math.round(
      (Math.random() * (max - min) + min) * fractionMultiplier,
    ) / fractionMultiplier
  }


  // testMethod() {
  //   this._percent = this._percentage(this.modello, this.min, this.max);
  //   let percent = this.child.percent;
  //   let p = this._percent;
  //   console.log('percentage() ===> ' + percent);
  //   console.log('PERCENTUALE RICALCOLATA ===> ' + p);
  //   console.log('PERCENTAULE START NG-PRIME ===> ' + this._percentage(this.currentSelectedRange[0], this.min, this.max))
  //   console.log('PERCENTAULE START NG-PRIME (RICALCOLATA) ===> ' + this._getPercentageBetween(this.currentSelectedRange[0], this.min, this.max))
  //   console.log('VALORE ATTUALE START NG-PRIME ===> ' + this.currentSelectedRange[0])
  // }


}
