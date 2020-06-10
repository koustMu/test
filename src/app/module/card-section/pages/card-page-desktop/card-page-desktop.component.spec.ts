import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageDesktopComponent } from './card-page-desktop.component';

describe('CardPageDesktopComponent', () => {
  let component: CardPageDesktopComponent;
  let fixture: ComponentFixture<CardPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
