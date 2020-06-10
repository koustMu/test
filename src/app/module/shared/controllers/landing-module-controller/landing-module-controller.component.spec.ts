import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingModuleControllerComponent } from './landing-module-controller.component';

describe('LandingModuleControllerComponent', () => {
  let component: LandingModuleControllerComponent;
  let fixture: ComponentFixture<LandingModuleControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingModuleControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingModuleControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
