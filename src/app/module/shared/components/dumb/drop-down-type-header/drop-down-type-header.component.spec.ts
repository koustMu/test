import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownTypeHeaderComponent } from './drop-down-type-header.component';

describe('DropDownTypeHeaderComponent', () => {
  let component: DropDownTypeHeaderComponent;
  let fixture: ComponentFixture<DropDownTypeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownTypeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownTypeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
