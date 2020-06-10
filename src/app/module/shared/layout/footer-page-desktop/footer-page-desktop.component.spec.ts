import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPageDesktopComponent } from './footer-page-desktop.component';

describe('FooterPageDesktopComponent', () => {
  let component: FooterPageDesktopComponent;
  let fixture: ComponentFixture<FooterPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
