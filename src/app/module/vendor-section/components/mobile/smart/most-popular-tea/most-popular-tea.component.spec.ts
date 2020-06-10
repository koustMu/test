import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularTeaComponent } from './most-popular-tea.component';

describe('MostPopularTeaComponent', () => {
  let component: MostPopularTeaComponent;
  let fixture: ComponentFixture<MostPopularTeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularTeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
