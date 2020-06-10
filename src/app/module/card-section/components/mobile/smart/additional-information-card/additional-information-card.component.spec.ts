import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInformationCardComponent } from './additional-information-card.component';

describe('AdditionalInformationCardComponent', () => {
  let component: AdditionalInformationCardComponent;
  let fixture: ComponentFixture<AdditionalInformationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInformationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
