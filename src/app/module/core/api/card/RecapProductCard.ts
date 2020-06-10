import {ThumbnailImage} from './ThumbnailImage';
import {Country, ReviewData, Variant} from '../ProductCardResponse';
import {VariantOM} from './VariantOm';

export interface RecapProductCard {
  productId?: string;
  thumbnailImage: ThumbnailImage[];
  name?: string;
  reviewData?: ReviewData;
  vendorId?: string;
  vendorName?: string;
  years?: string;
  productCategory?: string;
  elevation?: number;
  variants?: VariantOM[];
  type?: string;
  location?: {
    country: Country;
    region: string;
  };
  vote?: {
    ratingVote: string;
    color: string;
  };
}
