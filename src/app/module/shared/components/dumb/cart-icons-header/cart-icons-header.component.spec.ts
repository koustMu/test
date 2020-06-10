import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIconsHeaderComponent } from './cart-icons-header.component';

describe('CartIconsHeaderComponent', () => {
  let component: CartIconsHeaderComponent;
  let fixture: ComponentFixture<CartIconsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartIconsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIconsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
