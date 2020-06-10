import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemSmartComponent } from './card-item-smart.component';

describe('CardItemSmartComponent', () => {
  let component: CardItemSmartComponent;
  let fixture: ComponentFixture<CardItemSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
