import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTeawareCategoryHeaderComponent } from './dropdown-teaware-category-header.component';

describe('DropdownTeawareCategoryHeaderComponent', () => {
  let component: DropdownTeawareCategoryHeaderComponent;
  let fixture: ComponentFixture<DropdownTeawareCategoryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTeawareCategoryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTeawareCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
