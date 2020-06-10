import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeFilterBarComponent } from './range-filter-bar.component';

describe('RangeFilterBarComponent', () => {
  let component: RangeFilterBarComponent;
  let fixture: ComponentFixture<RangeFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
