import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../../../core/service/home.service";

@Component({
  selector: 'app-articles-section-home',
  templateUrl: './articles-section-home.component.html',
  styleUrls: ['./articles-section-home.component.scss']
})
export class ArticlesSectionHomeComponent implements OnInit {
  data;
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.homeService.getArticles().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
