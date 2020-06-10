import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesktopPageComponent } from './home-desktop-page.component';

describe('HomeDesktopPageComponent', () => {
  let component: HomeDesktopPageComponent;
  let fixture: ComponentFixture<HomeDesktopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDesktopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDesktopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
