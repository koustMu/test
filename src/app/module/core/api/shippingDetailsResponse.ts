
  export interface DiscountThreshold {
    fixedDiscount: number;
    percentageDiscount: number;
    threshold: number;
  }

  export interface Price {
    currency: string;
    price: number;
  }

  export interface ShippingCondition {
    discountThreshold: DiscountThreshold;
    eta: number;
    eurPrice: Price;
    freeShipping: boolean;
    freeThreshold: number;
    maxEta: number;
    maximumWeight: number;
    minEta: number;
    name: string;
    originalPrice: Price;
  }

  export class ShippingZone {
    countriesCode: string[];
    id: string;
    name: string;
  }

  export class ShippingDetailsResource {
    conditions: ShippingCondition[];
    id: string;
    vendorId: string;
    zone: ShippingZone;
  }

  export class ShippingDetailsResponse {
    shippingDetails: Map<string, ShippingDetailsResource[]>;
  }
