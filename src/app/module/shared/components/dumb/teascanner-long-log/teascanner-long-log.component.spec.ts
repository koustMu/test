import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeascannerLongLogComponent } from './teascanner-long-log.component';

describe('TeascannerLongLogComponent', () => {
  let component: TeascannerLongLogComponent;
  let fixture: ComponentFixture<TeascannerLongLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeascannerLongLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeascannerLongLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
