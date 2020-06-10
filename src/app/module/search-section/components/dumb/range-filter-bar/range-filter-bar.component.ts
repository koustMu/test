import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Bar, Range} from "../../../model/Range";
import {RangeFilterViewComponent} from "../../mobile/smart/range-filter-view/range-filter-view.component";


const ACTIVE_COLOR = '#661626'; // è il primary-dark
const INACTIVE_COLOR = '#E3CCCE'; // è il primary-light
const DISABLED_COLOR = '#DADADA';

@Component({
  selector: 'app-range-filter-bar',
  templateUrl: './range-filter-bar.component.html',
  styleUrls: ['./range-filter-bar.component.scss']
})
export class RangeFilterBarComponent implements OnInit, OnDestroy {
  _bar: Bar;
  _frequency: number = 50;
  _currentColor: string;
  @Input() rangeSelected: Range = new Range(40, 58);
  @Input() disabled: boolean = true;

  constructor(private rangeFilterView: RangeFilterViewComponent) {
  }

  ngOnInit(): void {
    // this.rangeFilterView.onSelectedRangeChanged.subscribe(r => {
    //   this._currentColor = this.disabled ? DISABLED_COLOR : this.isInRange(r) ? ACTIVE_COLOR : INACTIVE_COLOR;
    // })
  }

  ngOnDestroy() {
    //this.rangeFilterView.onSelectedRangeChanged.unsubscribe();
  }

  @Input()
  set bar(val: Bar) {
    this._bar = val;
    this._frequency = val.frequency;
  }

  get bar(): Bar {
    return this._bar;
  }

  // verifica se la barra rientra nel range di valori attualmente selezionato
  // il valore di ritorno di questo metodo determina il colore della barra verticale
  isInRange(r: Range): boolean {
    return r.from <= this._bar.percentageRange.from && this._bar.percentageRange.to <= r.to;
  }


}
