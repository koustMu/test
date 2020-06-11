import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-search-section-home',
  templateUrl: './quick-search-section-home.component.html',
  styleUrls: ['./quick-search-section-home.component.scss']
})
export class QuickSearchSectionHomeComponent implements OnInit {

  constructor() { }
  list = [1,2,3,4];
  ngOnInit(): void {
  }

}
