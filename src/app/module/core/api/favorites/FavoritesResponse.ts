import {BaseResponse} from '../response.interface';

export interface Favorite {
  insertDate: Date;
  productCategory: string;
  productId: string;
  productType: string;
}


export interface FavoritesResponse extends BaseResponse {
  default: boolean;
  favorites: Favorite[];
  id: string;
  name: string;
  userId: string;
}
