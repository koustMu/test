import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarReviewCardComponent } from './star-review-card.component';

describe('StarReviewCardComponent', () => {
  let component: StarReviewCardComponent;
  let fixture: ComponentFixture<StarReviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarReviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
