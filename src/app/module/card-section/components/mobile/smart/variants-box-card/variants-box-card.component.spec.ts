import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantsBoxCardComponent } from './variants-box-card.component';

describe('VariantsBoxCardComponent', () => {
  let component: VariantsBoxCardComponent;
  let fixture: ComponentFixture<VariantsBoxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariantsBoxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantsBoxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
