import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoFrameUserComponent } from './user-info-frame-user.component';

describe('UserInfoFrameUserComponent', () => {
  let component: UserInfoFrameUserComponent;
  let fixture: ComponentFixture<UserInfoFrameUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoFrameUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoFrameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
