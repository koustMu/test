import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterResource} from "../../../../core/api/SearchResponse";
import {Filter} from "../../../utils/Filter";


@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent {

  @Output() typeFilterChanged = new EventEmitter<{ filterName: Filter, value: string }>()
  @Input() typesState: {teaTypes: FilterResource[], currentSelected: string};

  constructor() {
  }

  isAvailable(teaTypeName: string): boolean {
    let result = false;
    this.typesState.teaTypes.forEach(type => {
      if (type.value == teaTypeName) {
        result = true;
      }
    });
    return result;
  }

  onSelectionChange(filterValue: string) {
    if (this.isAvailable(filterValue)) {
      this.typeFilterChanged.emit({filterName: Filter.TYPE, value: this.typesState.currentSelected});
    }
  }

  onClick(filter: string) {
    if (this.isAvailable(filter)) {
      if (this.typesState.currentSelected == 'none' || this.typesState.currentSelected != filter) {
        this.typesState.currentSelected = filter;
      } else if (this.typesState.currentSelected == filter) {
        this.typesState.currentSelected = 'none';
      }
    }
  }
}
