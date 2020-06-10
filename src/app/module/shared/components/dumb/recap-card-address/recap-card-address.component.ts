import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from '../../../../core/api/ProductCardResponse';
import {AddressForm} from '../../../../core/api/AddressForm';

@Component({
  selector: 'app-recap-card-address',
  templateUrl: './recap-card-address.component.html',
  styleUrls: ['./recap-card-address.component.scss']
})
export class RecapCardAddressComponent implements OnInit {

  idAddressRemoved = false;
  @Input() selectedCard: string;
  @Input() addressForm: AddressForm;
  @Output() onChangeSelectedCard: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChangeCancelForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChangeRemoveForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUpsertForm: EventEmitter<AddressForm> = new EventEmitter<AddressForm>();
  @Output() onSetDefaultAddress: EventEmitter<AddressForm> = new EventEmitter<AddressForm>();
  @Input() goToButton: boolean;
  @Input() addressIdOpen: string;
  @Input() isDefaultAddress: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedCard = 'card-address-container';
  }

  onClickOpenForm(id: string) {
    this.selectedCard = 'selected-item-shadow';
    this.onChangeSelectedCard.emit(id);
  }

  onClickRemoveAddress(id: string) {
    this.onChangeRemoveForm.emit(id);
  }

  upsertAddressForm(addressForm: AddressForm) {
    addressForm.id = this.addressForm.id;
    this.onUpsertForm.emit(addressForm);
  }

  closeFormAddress() {
    this.onChangeCancelForm.emit();
  }

  setDefaultAddress(addressForm: AddressForm) {
    addressForm.default = !this.addressForm.default;
    addressForm.id = this.addressForm.id;
    this.onSetDefaultAddress.emit(addressForm);
  }
}
