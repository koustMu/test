import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchSectionHomeComponent } from './quick-search-section-home.component';

describe('QuickSearchSectionHomeComponent', () => {
  let component: QuickSearchSectionHomeComponent;
  let fixture: ComponentFixture<QuickSearchSectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchSectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
