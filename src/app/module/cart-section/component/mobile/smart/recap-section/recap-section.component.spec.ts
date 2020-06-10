import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapSectionComponent } from './recap-section.component';

describe('RecapSectionComponent', () => {
  let component: RecapSectionComponent;
  let fixture: ComponentFixture<RecapSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
