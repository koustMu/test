import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarcitySectionHomeComponent } from './scarcity-section-home.component';

describe('ScarcitySectionHomeComponent', () => {
  let component: ScarcitySectionHomeComponent;
  let fixture: ComponentFixture<ScarcitySectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScarcitySectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScarcitySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
