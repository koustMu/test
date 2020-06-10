import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCardCTAComponent } from './special-card-cta.component';

describe('SpecialCardCTAComponent', () => {
  let component: SpecialCardCTAComponent;
  let fixture: ComponentFixture<SpecialCardCTAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCardCTAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCardCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
