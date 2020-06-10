import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FilterResource} from "../../../../core/api/SearchResponse";

@Component({
  selector: 'app-variety-filter',
  templateUrl: './variety-filter.component.html',
  styleUrls: ['./variety-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VarietyFilterComponent implements OnInit {

  @Input() varietyState?: {varieties: FilterResource[], currentValue: string} = {varieties: [], currentValue: 'all'};
  @Output() varietyChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChanged() {
    this.varietyChanged.emit(this.varietyState.currentValue);
  }
}
