import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmarksComponent } from './checkmarks.component';

describe('CheckmarksComponent', () => {
  let component: CheckmarksComponent;
  let fixture: ComponentFixture<CheckmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
