import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/module/core/service/home.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

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
        items: 1.7
      },
    },
    nav: true
  }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCountries().subscribe(data => {
      this.data = data['countries'].slice(10);
      console.log(data);
      console.log(this.data);
    })
  }

}
