import {BaseResponse} from './response.interface';

export interface ProductCardResponse extends BaseResponse {
  description: string;
  id: string;
  images: Image[];
  type: string;
  name: string;
  country: Country;
  originalId: string;
  productCategory: string;
  reviewData: ReviewData;
  shippingFrom: Country;
  teaDetails: TeaDetails;
  teawareDetails: TeawareDetails;
  thumbnail: Image;
  totalReviews: number;
  url: string;
  variants: Variant[];
  vendorId: string;
  vendorName: string;
  region: string;
}

export interface Variant {
  eurPrice: Price;
  id: string;
  name: string;
  originalPrice: Price;
  percentageDiscount: number;
  remainingQuantity: number;
  value: string;
}

interface Price {
  currency: string;
  discountedPrice: number;
  percentageDiscount: number;
  price: number;
}

export interface TeawareDetails {
  capacity: number;
  color: string;
  dimension: Dimension;
  manufacture: string;
  material: string;
  weight: number;
}

interface Dimension {
  height: number;
  length: number;
  measureUnit: string;
  width: number;
}

export interface TeaDetails {
  aroma: string[];
  certifiedOrganic: boolean;
  cultivar: string;
  elevation: number;
  infusionDetails: InfusionDetail[];
  pressed: boolean;
  pricePerGram: number;
  roasted: boolean;
  sample: boolean;
  season: string;
  taste: string[];
  variety: string;
  year: string;
}

interface InfusionDetail {
  centigradeTemp: number;
  fahrenheitTemp: number;
  leafQuantity: number;
  style: string;
  times: number[];
  totalInfusions: number;
  waterQuantity: number;
}

export interface Country {
  code: string;
  name: string;
}

export interface ReviewData {
  avg: number;
  teaProp: TeaProp;
  teawareProp: TeawareProp;
  totalReviews: number;
  totalScore: number;
}

interface TeawareProp {
  color: number;
  insulation: number;
  strenght: number;
}

interface TeaProp {
  aroma: number;
  leafQuality: number;
  taste: number;
}

export interface Image {
  id: string;
  name: string;
  url: string;
}
