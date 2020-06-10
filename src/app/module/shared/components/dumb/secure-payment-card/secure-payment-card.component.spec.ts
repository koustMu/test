import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePaymentCardComponent } from './secure-payment-card.component';

describe('SecurePaymentCardComponent', () => {
  let component: SecurePaymentCardComponent;
  let fixture: ComponentFixture<SecurePaymentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurePaymentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurePaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
