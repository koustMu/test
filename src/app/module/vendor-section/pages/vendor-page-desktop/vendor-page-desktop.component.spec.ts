import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPageDesktopComponent } from './vendor-page-desktop.component';

describe('VendorPageDesktopComponent', () => {
  let component: VendorPageDesktopComponent;
  let fixture: ComponentFixture<VendorPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
