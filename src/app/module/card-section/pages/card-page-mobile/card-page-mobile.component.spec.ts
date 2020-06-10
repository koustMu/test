import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageMobileComponent } from './card-page-mobile.component';

describe('CardPageMobileComponent', () => {
  let component: CardPageMobileComponent;
  let fixture: ComponentFixture<CardPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
