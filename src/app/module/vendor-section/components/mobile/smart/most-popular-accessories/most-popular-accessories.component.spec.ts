import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularAccessoriesComponent } from './most-popular-accessories.component';

describe('MostPopularAccessoriesComponent', () => {
  let component: MostPopularAccessoriesComponent;
  let fixture: ComponentFixture<MostPopularAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
