import {BaseResponse} from './response.interface';
import {ProductCardResource} from './SearchResponse';

export interface ScarcityResponse extends BaseResponse {
  products: ProductCardResource[];
}
