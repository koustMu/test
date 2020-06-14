import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../../../core/service/home.service";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ArticlesResponse } from 'src/app/module/core/api/ArticlesResponse';

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

  getImage(image){
    return "url("+image.url+")";
  }
  ngOnInit(): void {
    this.homeService.getArticles().subscribe((data:ArticlesResponse) => {
      this.data = data;},
      error=>{
        let url="assets/mock-image/Black_tea_Darjeeling_WestBengal_India.png"
        this.data={articles:[{author:{name:"Sian Zong"},title:"Excited",coverImage:{url:url}},
                   {author:{name:"Ze Tamang"},title:"Superb",coverImage:{url:url}},
                   {author:{name:"Vijay Sen"},title:"Fragnance",coverImage:{url:url}},
                   {author:{name:"Chirs Ivan"},title:"Dummy",coverImage:{url:url}},
                   {author:{name:"Thor"},title:"Nice",coverImage:{url:url}}]}
      })
  }

  

}
