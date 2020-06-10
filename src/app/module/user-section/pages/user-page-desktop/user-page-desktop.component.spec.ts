import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDesktopComponent } from './user-page-desktop.component';

describe('UserPageDesktopComponent', () => {
  let component: UserPageDesktopComponent;
  let fixture: ComponentFixture<UserPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
