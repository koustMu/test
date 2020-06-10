import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFrameUserComponent } from './orders-frame-user.component';

describe('OrdersFrameUserComponent', () => {
  let component: OrdersFrameUserComponent;
  let fixture: ComponentFixture<OrdersFrameUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersFrameUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFrameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
