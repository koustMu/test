import {BaseResponse} from './response.interface';

export interface Country {
  code: string;
  name: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  country: Country;
  email: string;
  firstName: string;
  houseNumber: string;
  id: string;
  lastName: string;
  note: string;
  phoneNumber: string;
  state: string;
  zipCode: string;
}

export interface Coupon {
  coupon: string;
  discountPercentage: number;
  id: string;
  vendorId: string;
}

export interface Price {
  currency: string;
  discountedPrice: number;
  price: number;
}

export interface Product {
  eurPrice: Price;
  name: string;
  originalPrice: Price;
  percentageDiscount: number;
  productId: string;
  quantity: number;
  shippingFrom: Country;
  total: number;
  type: string;
  url: string;
  variantId: string;
  vendorId: string;
  vendorName: string;
}

export interface VendorOrder {
  coupons: Coupon[];
  createdOn: Date;
  id: string;
  lastModified: Date;
  products: Product[];
  total: number;
  totalShipping: number;
  vendorId: string;
  vendorName: string;
}

export interface Order {
  createdOn: Date;
  id: string;
  lastModified: Date;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  status: string;
  total: number;
  totalShipping: number;
  userId: string;
  vendorOrder: VendorOrder[];
}

export interface OrdersResponse extends BaseResponse {
  moreItems: boolean;
  orders: Order[];
}
