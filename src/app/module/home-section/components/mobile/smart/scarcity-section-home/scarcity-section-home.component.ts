import { Component, OnInit } from '@angular/core';
import { ProductCardService } from "../../../../../core/service/product-card.service";
import { HomeService } from "../../../../../core/service/home.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-scarcity-section-home',
  templateUrl: './scarcity-section-home.component.html',
  styleUrls: ['./scarcity-section-home.component.scss']
})
export class ScarcitySectionHomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  data;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 0,
    // stagePadding:20,
    responsive: {
      0: {
        items: 1.1
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.homeService.getScarcityProducts().subscribe(data => {
      this.data = data;
    },
      error => {
      //   this.data = {products:[{
      //     favorite: true,
      //     name: "Assam Tea",
      //     productId: "uihjk",
      //     specialCard: false,
      //   },{
      //     favorite: true,
      //     name: "Darjeeling Tea",
      //     productId: "drtdgh",
      //     specialCard: false,
      //   }]}
       });
  }

}
