import {BaseResponse} from './response.interface';
import {ProductCardResource} from './SearchResponse';



export interface TotalItemsByProdCat {
  count: number;
  id: string;
}

export interface FavoritesProductsResponse extends BaseResponse {
  default: boolean;
  favorites: ProductCardResource[];
  id: string;
  moreItems: boolean;
  name: string;
  totalItemsByProdCat: TotalItemsByProdCat[];
}


export interface AllListsDetail {
  id: string;
  name: string;
  totalElements: number;
}

export interface FavoriteListResponse extends BaseResponse {
  AllListsDetail: AllListsDetail[];
}

