import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerProgressLoadingComponent } from './spinner-progress-loading.component';

describe('SpinnerProgressLoadingComponent', () => {
  let component: SpinnerProgressLoadingComponent;
  let fixture: ComponentFixture<SpinnerProgressLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerProgressLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerProgressLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
