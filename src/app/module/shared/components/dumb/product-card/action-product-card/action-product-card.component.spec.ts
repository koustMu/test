import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionProductCardComponent } from './action-product-card.component';

describe('ActionProductCardComponent', () => {
  let component: ActionProductCardComponent;
  let fixture: ComponentFixture<ActionProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
