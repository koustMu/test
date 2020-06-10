import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStarsBoxCardComponent } from './review-stars-box-card.component';

describe('ReviewStarsBoxCardComponent', () => {
  let component: ReviewStarsBoxCardComponent;
  let fixture: ComponentFixture<ReviewStarsBoxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewStarsBoxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewStarsBoxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
