import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCtaComponent } from './card-cta.component';

describe('CtaFabsComponent', () => {
  let component: CardCtaComponent;
  let fixture: ComponentFixture<CardCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
