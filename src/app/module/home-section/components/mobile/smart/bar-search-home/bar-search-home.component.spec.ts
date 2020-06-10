import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSearchHomeComponent } from './bar-search-home.component';

describe('BarSearchHomeComponent', () => {
  let component: BarSearchHomeComponent;
  let fixture: ComponentFixture<BarSearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSearchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
