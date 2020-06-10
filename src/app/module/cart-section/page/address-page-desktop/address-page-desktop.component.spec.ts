import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPageDesktopComponent } from './address-page-desktop.component';

describe('AddressPageDesktopComponent', () => {
  let component: AddressPageDesktopComponent;
  let fixture: ComponentFixture<AddressPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
