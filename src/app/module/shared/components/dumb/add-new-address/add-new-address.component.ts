import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from '../../../../core/api/ProductCardResponse';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss']
})
export class AddNewAddressComponent implements OnInit {
  @Input() newAddress: boolean;

  @Output() onChangeAddNewAddress: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseNewAddress: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUpsertForm:
    EventEmitter<{ additionalInfo: string; address: string; addressMoreInfo: string; city: string; country: Country; default: boolean; email: string; firstName: string; id: string; lastName: string; phoneNumber: string; state: string; zipCode: string }> =
    new EventEmitter<{ additionalInfo: string; address: string; addressMoreInfo: string; city: string; country: Country; default: boolean; email: string; firstName: string; id: string; lastName: string; phoneNumber: string; state: string; zipCode: string }>();
  constructor() {
  }

  ngOnInit(): void {
    this.newAddress = false;
  }

  addNewAddress() {
    this.onChangeAddNewAddress.emit();
  }

  closeFormAddress() {
    this.onCloseNewAddress.emit();
  }

  submitForm(address: { additionalInfo: string; address: string; addressMoreInfo: string; city: string; country: Country; default: boolean; email: string; firstName: string; id: string; lastName: string; phoneNumber: string; state: string; zipCode: string }) {
    this.onUpsertForm.emit(address);
  }
}
