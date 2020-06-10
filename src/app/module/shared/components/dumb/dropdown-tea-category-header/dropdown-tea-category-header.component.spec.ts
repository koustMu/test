import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTeaCategoryHeaderComponent } from './dropdown-tea-category-header.component';

describe('DropdownTeaCategoryHeaderComponent', () => {
  let component: DropdownTeaCategoryHeaderComponent;
  let fixture: ComponentFixture<DropdownTeaCategoryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTeaCategoryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTeaCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
