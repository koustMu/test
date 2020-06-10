import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Filter} from "../../../utils/Filter";


@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss']
})
export class AppliedFiltersComponent implements OnInit {

  removable = true;
  @Input()  appliedFilters: string[];
  @Output() filterRemoved = new EventEmitter<string>();

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  onFilterRemoved(filter: string) {
    const index = this.appliedFilters.indexOf(filter);

    if (index >= 0) {
      this.appliedFilters.splice(index, 1);
    }
    this.filterRemoved.emit(filter);
  }

}
