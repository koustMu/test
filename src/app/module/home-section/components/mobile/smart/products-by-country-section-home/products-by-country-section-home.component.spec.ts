import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByCountrySectionHomeComponent } from './products-by-country-section-home.component';

describe('ProductsByCountrySectionHomeComponent', () => {
  let component: ProductsByCountrySectionHomeComponent;
  let fixture: ComponentFixture<ProductsByCountrySectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsByCountrySectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByCountrySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
