import {Country} from './ProductCardResponse';
import {BaseResponse} from './response.interface';

export interface AddressList {
  additionalInfo: string;
  address: string;
  addressMoreInfo: string;
  city: string;
  country: Country;
  default: boolean;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  state: string;
  zipCode: string;
}

export interface AddressResponse extends BaseResponse {
  addressList: AddressList[];
}

