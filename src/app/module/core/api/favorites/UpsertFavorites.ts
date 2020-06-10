import {BaseResponse} from '../response.interface';

export interface UpsertFavorites extends BaseResponse {
  default: boolean;
  favorites: Favorite[];
  id: string;
  name: string;
  userId: string;
}

interface Favorite {
  insertDate: Date;
  productCategory: string;
  productId: string;
  productType: string;
}
