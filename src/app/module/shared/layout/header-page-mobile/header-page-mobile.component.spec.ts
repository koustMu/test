import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageMobileComponent } from './header-page-mobile.component';

describe('HeaderPageMobileComponent', () => {
  let component: HeaderPageMobileComponent;
  let fixture: ComponentFixture<HeaderPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
