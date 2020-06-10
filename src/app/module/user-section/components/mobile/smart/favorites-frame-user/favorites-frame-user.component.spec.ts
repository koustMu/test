import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesFrameUserComponent } from './favorites-frame-user.component';

describe('FavoritesFrameUserComponent', () => {
  let component: FavoritesFrameUserComponent;
  let fixture: ComponentFixture<FavoritesFrameUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesFrameUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesFrameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
