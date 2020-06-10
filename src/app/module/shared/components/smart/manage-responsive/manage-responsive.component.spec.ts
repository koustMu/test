import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResponsiveComponent } from './manage-responsive.component';

describe('ManageResponsiveComponent', () => {
  let component: ManageResponsiveComponent;
  let fixture: ComponentFixture<ManageResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
