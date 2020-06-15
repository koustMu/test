import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/module/core/service/home.service';
import { Country } from 'src/app/module/cart-section/model/Country';
import { ScarcityResponse } from 'src/app/module/core/api/ScarcityResponse';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  data;

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   margin:20,
  //   //stagePadding:10,
  //   responsive: {
  //     0: {
  //       items: 1.7
  //     },
  //   },
  //   nav: true
  // }

  getImage(image){
    if(image) return "url("+image+")";
    else return "url(assets/popUp/Dark_tea_FuZhuan_Hunan_China.png)";
  }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCountries().subscribe((countryResponse )=> {
      this.data = countryResponse['countries'].slice(10);},
      error=>{
        this.data=[{code:"12345",name:"China"},
                   {code:"88976",name:"Italy"},
                   {code:"17845",name:"Afganystan"},
                   {code:"12k45",name:"Japan"},
                   {code:"1l345",name:"Nepal"}]
      })
  }

}
