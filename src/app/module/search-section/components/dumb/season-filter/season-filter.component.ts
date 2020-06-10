import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterResource} from "../../../../core/api/SearchResponse";
import {Filter} from "../../../utils/Filter";

@Component({
  selector: 'app-season-filter',
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.scss']
})
export class SeasonFilterComponent {

  @Input() seasonState?: {seasons: FilterResource[], currentSelected: string};
  @Output() seasonFilterChanged = new EventEmitter<{ filterName: Filter, value: string }>()

  constructor() {
  }

  isAvailable(season: string): boolean {
    let result = false;
    this.seasonState.seasons.forEach(s => {
      if (s.value.toUpperCase() == season.toUpperCase()) {
        result = true;
      }
    });
    return result;
  }

  onSelectionChange(filterValue: string) {
    if (this.isAvailable(filterValue)) {
      this.seasonFilterChanged.emit({filterName: Filter.SEASON, value: this.seasonState.currentSelected});
    }
  }

  onFilterClick(filter: string) {
    if (this.isAvailable(filter)) {
      if (this.seasonState.currentSelected == 'none' || this.seasonState.currentSelected != filter) {
        this.seasonState.currentSelected = filter;
      } else if (this.seasonState.currentSelected == filter) {
        this.seasonState.currentSelected = 'none';
      }
    }
  }


}
