import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageDesktopComponent } from './search-page-desktop.component';

describe('SearchResultsPageDesktopComponent', () => {
  let component: SearchPageDesktopComponent;
  let fixture: ComponentFixture<SearchPageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
