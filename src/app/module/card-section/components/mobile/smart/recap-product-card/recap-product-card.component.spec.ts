import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapProductCardComponent } from './recap-product-card.component';

describe('RecapProductCardComponent', () => {
  let component: RecapProductCardComponent;
  let fixture: ComponentFixture<RecapProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
