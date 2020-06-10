import {Country} from './ProductCardResponse';

export interface AddressForm {
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
