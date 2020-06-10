import {BaseResponse} from './response.interface';
import {ProductCardResource} from './SearchResponse';


export interface Country {
  code: string;
  name: string;
}

export interface Logo {
  name: string;
  url: string;
}

export interface RatingDetails {
  avg: number;
  totalReviews: number;
}


export interface VendorInfoResponse extends BaseResponse {
  country: Country;
  description: string;
  id: string;
  logo: Logo;
  name: string;
  productCard: ProductCardResource;
  ratingDetails: RatingDetails;
  website: string;
  ranking?: {
    ratingVote: string,
    color: string
  };
}
