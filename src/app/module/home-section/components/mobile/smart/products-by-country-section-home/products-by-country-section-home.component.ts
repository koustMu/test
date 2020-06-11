import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../../../core/service/home.service";

@Component({
  selector: 'app-products-by-country-section-home',
  templateUrl: './products-by-country-section-home.component.html',
  styleUrls: ['./products-by-country-section-home.component.scss']
})
export class ProductsByCountrySectionHomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  data;
  ngOnInit(): void {
    this.homeService.getScarcityProducts().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
