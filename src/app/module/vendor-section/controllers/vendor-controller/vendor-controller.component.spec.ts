import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorControllerComponent } from './vendor-controller.component';

describe('VendorControllerComponent', () => {
  let component: VendorControllerComponent;
  let fixture: ComponentFixture<VendorControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
