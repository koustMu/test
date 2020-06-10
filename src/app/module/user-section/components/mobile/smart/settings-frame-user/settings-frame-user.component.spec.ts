import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFrameUserComponent } from './settings-frame-user.component';

describe('SettingsFrameUserComponent', () => {
  let component: SettingsFrameUserComponent;
  let fixture: ComponentFixture<SettingsFrameUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsFrameUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFrameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
