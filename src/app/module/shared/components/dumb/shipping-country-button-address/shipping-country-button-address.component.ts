import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Country} from '../../../../cart-section/model/Country';
import {GlobalVariable} from '../../../../../globals';

@Component({
  selector: 'app-shipping-country-button-address',
  templateUrl: './shipping-country-button-address.component.html',
  styleUrls: ['./shipping-country-button-address.component.scss']
})
export class ShippingCountryButtonAddressComponent implements OnInit {
  @Input() placeholder = 'Country';
  @Output() onChangeSelectedCountry: EventEmitter<Country> = new EventEmitter<Country>();
  valueList: Country[] = JSON.parse(localStorage.getItem(GlobalVariable.localStorage.COUNTRIES_LIST));
  array: Country[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickSelectValue(actualValue: Country): void {
    this.placeholder = actualValue.name;
    this.onChangeSelectedCountry.emit(actualValue);
  }
}
