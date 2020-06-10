import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPageMobileComponent } from './footer-page-mobile.component';

describe('FooterPageMobileComponent', () => {
  let component: FooterPageMobileComponent;
  let fixture: ComponentFixture<FooterPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
