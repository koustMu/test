import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInputButtonComponent } from './single-input-button.component';

describe('SingleInputButtonComponent', () => {
  let component: SingleInputButtonComponent;
  let fixture: ComponentFixture<SingleInputButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInputButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
