import {Country, TeaDetails, TeawareDetails} from '../ProductCardResponse';

export interface AdditionalInformation {
  description?: string;
  vendorName?: string;
  productType?: string;
  details?: {
    teaDetails?: TeaDetails;
    teawareDetails?: TeawareDetails;
    type: string;
    location: {
      region: string;
      country: Country;
    }
  };
}
