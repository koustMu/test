import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySectionHomeComponent } from './category-section-home.component';

describe('CategorySectionHomeComponent', () => {
  let component: CategorySectionHomeComponent;
  let fixture: ComponentFixture<CategorySectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
