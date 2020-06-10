import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageDesktopComponent } from './order-page-desktop.component';

describe('OrderPageDesktopComponent', () => {
  let component: OrderPageDesktopComponent;
  let fixture: ComponentFixture<OrderPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
