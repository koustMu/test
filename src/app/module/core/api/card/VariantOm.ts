import {Variant} from '../ProductCardResponse';

export interface VariantOM {
  variant: Variant;
  isSelected: boolean;
  alertVariant: {
    text: string;
    class: string
  };
}
