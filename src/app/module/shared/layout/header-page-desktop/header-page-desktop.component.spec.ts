import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageDesktopComponent } from './header-page-desktop.component';

describe('HeaderPageDesktopComponent', () => {
  let component: HeaderPageDesktopComponent;
  let fixture: ComponentFixture<HeaderPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
