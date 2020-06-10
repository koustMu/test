import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

  @Output() priceChanged: EventEmitter<MatSliderChange>

  max = 3000;
  min = 1000;
  step = 100;
  value = 0;
  thumbLabel = false;

  constructor() { }

  ngOnInit(): void {
  }

}
