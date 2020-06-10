import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonSellingAlertsComponent } from './addon-selling-alerts.component';

describe('AddonSellingAlertsComponent', () => {
  let component: AddonSellingAlertsComponent;
  let fixture: ComponentFixture<AddonSellingAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonSellingAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonSellingAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
