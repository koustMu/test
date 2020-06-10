import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.scss']
})
export class PriceInfoComponent implements OnInit {

  @Input() price: number;
  @Input() discountedPrice: number;

  constructor() {

  }

  ngOnInit(): void {
  }

}
