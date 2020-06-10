import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuUserComponent } from './vertical-menu-user.component';

describe('VerticalMenuUserComponent', () => {
  let component: VerticalMenuUserComponent;
  let fixture: ComponentFixture<VerticalMenuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalMenuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
