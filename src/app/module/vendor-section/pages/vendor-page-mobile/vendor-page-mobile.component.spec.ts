import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPageMobileComponent } from './vendor-page-mobile.component';

describe('VendorPageMobileComponent', () => {
  let component: VendorPageMobileComponent;
  let fixture: ComponentFixture<VendorPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
