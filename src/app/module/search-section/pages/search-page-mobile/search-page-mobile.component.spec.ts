import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageMobileComponent } from './search-page-mobile.component';

describe('SearchResultsPageMobileComponent', () => {
  let component: SearchPageMobileComponent;
  let fixture: ComponentFixture<SearchPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
