import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuHeaderComponent } from './dropdown-menu-header.component';

describe('DropdownMenuHeaderComponent', () => {
  let component: DropdownMenuHeaderComponent;
  let fixture: ComponentFixture<DropdownMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
