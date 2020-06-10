import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent implements OnInit {

  @Input() countryFilterState?: {countries: [{country: string, count: number}], currentValue: string};
  @Output() countryChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChanged() {
    this.countryChanged.emit(this.countryFilterState?.currentValue);
  }

}
