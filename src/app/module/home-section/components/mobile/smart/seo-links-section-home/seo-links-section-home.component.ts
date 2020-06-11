import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo-links-section-home',
  templateUrl: './seo-links-section-home.component.html',
  styleUrls: ['./seo-links-section-home.component.scss']
})
export class SeoLinksSectionHomeComponent implements OnInit {

  constructor() { }
  list = [1, 2,3,4];
  ngOnInit(): void {
  }

}
