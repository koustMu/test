import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontViewSectionHomeComponent } from './front-view-section-home.component';

describe('FrontViewSectionHomeComponent', () => {
  let component: FrontViewSectionHomeComponent;
  let fixture: ComponentFixture<FrontViewSectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontViewSectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontViewSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
