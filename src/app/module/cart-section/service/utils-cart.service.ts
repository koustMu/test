import {Injectable} from '@angular/core';
import {Product} from '../../core/api/CartResponse';
import {ShippingDetailsResource} from '../../core/api/shippingDetailsResponse';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class UtilsCartService {

  constructor() {
  }

  static getVendorName(products: Product[]): string {
    return products[0].vendorName;
  }

  static getSubTotalEur(products: Product[]): number {
    return products.map(
      (a) => a.variant.eurPrice.price * a.quantity).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  static getSubTotalLocal(products: Product[]): number {
    return products.map(
      (a) => a.variant.originalPrice.price * a.quantity).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  static getLocalCurrency(products: Product[]): string {
    return products[0].variant.originalPrice.currency;
  }

  static createShippingDetail(shippingDetailsResourse: ShippingDetailsResource): void[] {

    //'<b>Basic</b>&nbsp;(10days) <b>28.00€</b>&nbsp;(218.17¥)',

    function rangeEtaShippingDetails(minEta: number, maxEta: number) {
      if (isUndefined(minEta) || minEta === null || minEta === 0) {
        return '(' + maxEta + ' days)';
      } else {
        return '(' + minEta + '-' + maxEta + ' days)';
      }
    }

    return shippingDetailsResourse.conditions.map((a) => {
      '<b>' + a.name + '</b>&nbsp;' + rangeEtaShippingDetails(a.minEta,a.maxEta) + '<b></b>';
    });
  }
}
