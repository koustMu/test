import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Filter} from "../../../utils/Filter";
import {FilterResource} from "../../../../core/api/SearchResponse";

@Component({
  selector: 'app-year-filter',
  templateUrl: './year-filter.component.html',
  styleUrls: ['./year-filter.component.scss']
})
export class YearFilterComponent {

  @Input() yearsState?: {years: FilterResource[], currentSelected: string};
  @Output() yearFilterChanged = new EventEmitter<{ filterName: Filter, value: string }>()

  constructor() {
  }

  isAvailable(cps: string): boolean {
    let result = false;
    this.yearsState.years.forEach(c => {
      if (c.value == cps) {
        result = true;
      }
    });
    return result;
  }

  onSelectionChange(filterValue: string) {
    if (this.isAvailable(filterValue)) {
      this.yearFilterChanged.emit({filterName: Filter.YEAR, value: this.yearsState.currentSelected});
    }
  }

  onClick(filter: string) {
    if (this.isAvailable(filter)) {
      if (this.yearsState.currentSelected == 'none' || this.yearsState.currentSelected != filter) {
        this.yearsState.currentSelected = filter;
      } else if (this.yearsState.currentSelected == filter) {
        this.yearsState.currentSelected = 'none';
      }
    }
  }


}
