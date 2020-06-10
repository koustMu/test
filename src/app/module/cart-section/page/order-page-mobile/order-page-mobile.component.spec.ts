import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageMobileComponent } from './order-page-mobile.component';

describe('OrderPageMobileComponent', () => {
  let component: OrderPageMobileComponent;
  let fixture: ComponentFixture<OrderPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
