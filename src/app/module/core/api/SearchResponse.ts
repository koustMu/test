import {BaseResponse} from './response.interface';

export interface SearchResponse extends BaseResponse {
  filters: Map<string, FilterResource[]>;
  results: ProductCardResource[];
}


export interface FilterResource {
  value: string;
  count: number;
}

export interface ProductCardResource extends BaseResponse {
  deals?: Deals;
  favorite: boolean;
  name: string;
  price: PriceResource;
  productId: string;
  productType: ProductType;
  reviewData?: ProductRatingResource;
  specialCard?: boolean;
  tags?: TagResource[];
  thumbnail?: ImageResource;
  vendorId: string;
  vendorName: string;
}

export enum ProductType {
  TEA, TEAWARE
}

export interface Deals {
  badge?: string;
  expiration?: Date;
  sellingAlerts?: string[];
}

export interface PriceResource {
  currency: string;
  discountedPrice: number;
  percentageDiscount: number;
  price: number;
}

export interface ProductRatingResource {
  avg: number;
  totalReview: number;
  totalScore: number;
}

export interface TagResource {
  type: TagType;
  value: string;
}

export enum TagType {
  ORIGIN = 'ORIGIN', ELEVATION = 'ELEVATION', TYPE = 'TYPE', YEAR = 'YEAR', SEASON = 'SEASON', PRICE_GRAM = 'PRICE GRAM'
}

export interface ImageResource {
  id: string;
  name: string;
  url: string;
}
