import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrderSupplierOrderComponent } from './sub-order-supplier-order.component';

describe('SubOrderSupplierOrderComponent', () => {
  let component: SubOrderSupplierOrderComponent;
  let fixture: ComponentFixture<SubOrderSupplierOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubOrderSupplierOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOrderSupplierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
