import {Component, OnInit} from '@angular/core';
import {CartSectionService} from '../../../core/service/cart-section.service';
import {GlobalVariable} from '../../../../globals';
import {Product} from '../../../core/api/CartResponse';
import {Country} from '../../model/Country';
import {ShippingCondition, ShippingDetailsResource, ShippingDetailsResponse} from '../../../core/api/shippingDetailsResponse';
import {isUndefined} from 'util';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-page-desktop',
  templateUrl: './cart-page-desktop.component.html',
  styleUrls: ['./cart-page-desktop.component.scss']
})
export class CartPageDesktopComponent implements OnInit {

  productsByVendors$: Observable<Map<string, Product[]>> = this.cartService.onChangeProductsByVendors$;
  shippingDetailsFiltered: Map<string, ShippingDetailsResource[]>;
  selectedShippingMethod: Map<string, ShippingCondition> = new Map<string, ShippingCondition>();


  isShippingAvailable: boolean;
  isProductsByVendorsAvailable = false;

  constructor(private cartService: CartSectionService) {
  }

  ngOnInit(): void {
    this.cartService.getCartByUserId().subscribe();
  }

  calculateShippingVendor(value: Country) {
    this.isShippingAvailable = false;
    this.isProductsByVendorsAvailable = false;
    setTimeout(() => {
      const shippingDetailsResponse: ShippingDetailsResponse = JSON
        .parse(sessionStorage.getItem(GlobalVariable.sessionStorage.SHIPPING_DETAILS));
      const shippingDetails = new Map<string, ShippingDetailsResource[]>();
      for (const member in shippingDetailsResponse.shippingDetails) {
        shippingDetails.set(member, shippingDetailsResponse.shippingDetails[member]);
      }
      this.shippingDetailsFiltered = new Map<string, ShippingDetailsResource[]>();
      shippingDetails.forEach(
        (valueMap, key) => {
          this.shippingDetailsFiltered.set(key, valueMap.filter(
            (shippingZone) => {
              return shippingZone.zone.countriesCode.find((countriesCode) => {
                return countriesCode === value.code;
              }) === value.code;
            }));
        });
      this.isShippingAvailable = !isUndefined(this.shippingDetailsFiltered);
      this.isProductsByVendorsAvailable = this.isShippingAvailable;
    }, 500);
    this.selectedShippingMethod = new Map<string, ShippingCondition>();
  }

    updateEditCartFromProduct(event: { product: Product, action: string }) {
      this.cartService.updateEditCartFromProduct(event);
  }

  selectedValueShippingMethod(objectEvent: { vendorId: string, shippingCondition: ShippingCondition }) {
    this.isProductsByVendorsAvailable = false;
    setTimeout(
      () => {
        this.selectedShippingMethod.set(objectEvent.vendorId, objectEvent.shippingCondition);
        this.isProductsByVendorsAvailable = true;
      }
      , 500);
  }
}
