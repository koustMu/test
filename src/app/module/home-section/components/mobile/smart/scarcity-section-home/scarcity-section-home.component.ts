import { Component, OnInit } from '@angular/core';
import {ProductCardService} from "../../../../../core/service/product-card.service";
import {HomeService} from "../../../../../core/service/home.service";

@Component({
  selector: 'app-scarcity-section-home',
  templateUrl: './scarcity-section-home.component.html',
  styleUrls: ['./scarcity-section-home.component.scss']
})
export class ScarcitySectionHomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  data;
  ngOnInit(): void {
    this.homeService.getScarcityProducts().subscribe(data =>{
      this.data = data;
    });
  }

}
