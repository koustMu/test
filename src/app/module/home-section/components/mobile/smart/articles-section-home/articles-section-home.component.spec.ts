import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSectionHomeComponent } from './articles-section-home.component';

describe('ArticlesSectionHomeComponent', () => {
  let component: ArticlesSectionHomeComponent;
  let fixture: ComponentFixture<ArticlesSectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
