import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../../../core/service/home.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-articles-section-home',
  templateUrl: './articles-section-home.component.html',
  styleUrls: ['./articles-section-home.component.scss']
})
export class ArticlesSectionHomeComponent implements OnInit {
  data;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:20,
    //stagePadding:10,
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

  constructor(private homeService: HomeService) { }

  getImage(slide){
    return "url("+slide.coverImage.url+")";
  }
  ngOnInit(): void {
    this.homeService.getArticles().subscribe(data => {
      this.data = data;
    })
  }

  

}
