import {BaseResponse} from './response.interface';


export interface Coupon {
  id: string;
  coupon: string;
  discountPercentage: number;
  vendorId: string;
}

interface Country {
  code: string;
  name: string;
}

interface Image {
  name: string;
  url: string;
}

interface Variant {
  id: string;
  name: string;
  eurPrice: Price;
  originalPrice: Price;
  remainingQuantity: number;
  value: string;
}

interface Price {
  currency: string;
  discountedPrice: number;
  percentageDiscount: number;
  price: number;
}

export interface Product {
  productId: string;
  title: string;
  total: number;
  type: string;
  variant: Variant;
  vendorId: string;
  vendorName: string;
  discountedTotal: number;
  quantity: number;
  shippingFrom: Country;
  soldOut: boolean;
  subTitle: string;
  thumbnail: Image;
  couponId: string;
}

export interface CartProductsResponse extends BaseResponse {
  couponsByVendor: Map<string, Coupon[]>;
  id: string;
  lastModified: Date;
  productsByVendor: Map<string, Product[]>;
  shippingCountry: Country;
  shippingTotal: number;
  status: string;
  subtotal: number;
  total: number;
  userId: string;
}


