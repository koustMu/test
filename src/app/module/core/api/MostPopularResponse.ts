import {BaseResponse} from './response.interface';
import {ProductCardResource} from './SearchResponse';

export interface MostPopularResponse extends BaseResponse{
  products: ProductCardResource[];
}
