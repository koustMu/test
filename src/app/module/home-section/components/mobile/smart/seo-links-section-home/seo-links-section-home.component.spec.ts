import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoLinksSectionHomeComponent } from './seo-links-section-home.component';

describe('SeoLinksSectionHomeComponent', () => {
  let component: SeoLinksSectionHomeComponent;
  let fixture: ComponentFixture<SeoLinksSectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoLinksSectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoLinksSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
