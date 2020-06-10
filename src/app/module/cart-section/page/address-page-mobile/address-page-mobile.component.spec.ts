import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPageMobileComponent } from './address-page-mobile.component';

describe('AddressPageMobileComponent', () => {
  let component: AddressPageMobileComponent;
  let fixture: ComponentFixture<AddressPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
