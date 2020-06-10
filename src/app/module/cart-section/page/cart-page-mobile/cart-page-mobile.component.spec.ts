import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageMobileComponent } from './cart-page-mobile.component';

describe('CartPageMobileComponent', () => {
  let component: CartPageMobileComponent;
  let fixture: ComponentFixture<CartPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
