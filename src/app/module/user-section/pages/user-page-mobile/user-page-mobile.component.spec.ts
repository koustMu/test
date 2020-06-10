import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageMobileComponent } from './user-page-mobile.component';

describe('UserPageMobileComponent', () => {
  let component: UserPageMobileComponent;
  let fixture: ComponentFixture<UserPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
