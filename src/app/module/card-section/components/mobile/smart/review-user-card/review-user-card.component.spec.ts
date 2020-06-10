import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUserCardComponent } from './review-user-card.component';

describe('ReviewUserCardComponent', () => {
  let component: ReviewUserCardComponent;
  let fixture: ComponentFixture<ReviewUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
