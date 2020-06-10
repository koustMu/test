import {BaseResponse} from './response.interface';
import {Country} from '../../cart-section/model/Country';

export interface CountryResponse extends BaseResponse {
  countries: Country[];
}
