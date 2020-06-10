import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {isUndefined} from 'util';
import {Country} from '../../../../core/api/ProductCardResponse';
import {AddressForm} from '../../../../core/api/AddressForm';

@Component({
  selector: 'app-form-upsert-address',
  templateUrl: './form-upsert-address.component.html',
  styleUrls: ['./form-upsert-address.component.scss']
})
export class FormUpsertAddressComponent implements OnInit {

  @Input() addressInitForm: AddressForm;
  addressForm = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    city: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    address: ['', Validators.required],
    addressMoreInfo: [''],
    additionalInfo: [''],
  });
  submitted = false;
  selectedCountry: string;
  @Output() closeForm: EventEmitter<AddressForm> = new EventEmitter<AddressForm>();
  @Output() submitForm: EventEmitter<AddressForm> = new EventEmitter<AddressForm>();

  get f() {
    return this.addressForm.controls;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
      if (!isUndefined(this.addressInitForm)) {
        this.addressForm.patchValue({
          id: this.addressInitForm.id,
          country: this.addressInitForm.country,
          firstName: this.addressInitForm.firstName,
          lastName: this.addressInitForm.lastName,
          address: this.addressInitForm.address,
          addressMoreInfo: this.addressInitForm.addressMoreInfo,
          phoneNumber: this.addressInitForm.phoneNumber,
          email: this.addressInitForm.email,
          state: this.addressInitForm.state,
          city: this.addressInitForm.city,
          zipCode: this.addressInitForm.zipCode,
          additionalInfo: this.addressInitForm.additionalInfo
        });
      }
    }

  onSubmit(addressForm: AddressForm) {
    this.submitted = true;
    this.submitForm.emit(addressForm);
  }

  countrySelected(value: Country) {
    this.submitted = false;
    this.addressForm.patchValue({
      country: value.name
    });
  }

  removeForm() {
    this.addressForm = null;
    this.closeForm.emit();
  }
}
