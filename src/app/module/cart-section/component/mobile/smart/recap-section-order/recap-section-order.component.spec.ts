import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapSectionOrderComponent } from './recap-section-order.component';

describe('RecapSectionOrderComponent', () => {
  let component: RecapSectionOrderComponent;
  let fixture: ComponentFixture<RecapSectionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapSectionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapSectionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
