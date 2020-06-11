import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-section-home',
  templateUrl: './category-section-home.component.html',
  styleUrls: ['./category-section-home.component.scss']
})
export class CategorySectionHomeComponent implements OnInit {

  constructor() { }
  category = ['Green', 'Yellow', 'White', 'Orange', 'Black', 'Blue', 'Brown', 'Silver'];
  ngOnInit(): void {
  }

}
