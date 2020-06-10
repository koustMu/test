import {BaseResponse} from './response.interface';


export interface UserPicture {
  id: string;
  name: string;
  url: string;
}

export interface Review {
  id: string;
  insertDate: Date;
  lastUpdate: Date;
  liked: boolean;
  rating: number;
  review: string;
  userName: string;
  userPicture: UserPicture;
}

export interface ReviewsCardResponse extends BaseResponse {
  globalStarCount: Map<string, number>;
  moreItems: boolean;
  reviews: Review[];
}
