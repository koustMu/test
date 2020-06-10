import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFrameUserComponent } from './address-frame-user.component';

describe('AddressFrameUserComponent', () => {
  let component: AddressFrameUserComponent;
  let fixture: ComponentFixture<AddressFrameUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFrameUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFrameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
