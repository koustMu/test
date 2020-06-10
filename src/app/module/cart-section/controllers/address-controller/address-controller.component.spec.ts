import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressControllerComponent } from './address-controller.component';

describe('AddressControllerComponent', () => {
  let component: AddressControllerComponent;
  let fixture: ComponentFixture<AddressControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
