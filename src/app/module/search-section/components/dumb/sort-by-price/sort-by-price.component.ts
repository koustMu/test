import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-by-price',
  templateUrl: './sort-by-price.component.html',
  styleUrls: ['./sort-by-price.component.scss']
})
export class SortByPriceComponent implements OnInit {

  @Input() selected: string;
  @Output() sortByPrice = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: string) {
    this.sortByPrice.emit(event)
    this.selected = event;
  }
}
