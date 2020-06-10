import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCountryButtonAddressComponent } from './shipping-country-button-address.component';

describe('ShippingCountryButtonAddressComponent', () => {
  let component: ShippingCountryButtonAddressComponent;
  let fixture: ComponentFixture<ShippingCountryButtonAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingCountryButtonAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingCountryButtonAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
