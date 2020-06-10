import {ReviewData} from '../ProductCardResponse';

export interface RatingSectionCard {
  reviewData?: ReviewData;
  productType?: string;
  vote?: {
    ratingVote: string;
    color: string;
  };
}
