import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent implements OnInit {

  data=[
    {color:'Green',image:'assets/popUp/Black_tea_Darjeeling_WestBengal_India.png'},
    {color:'Yellow',image:'assets/popUp/Black_tea_RubyRed18_SunMoonLake_Taiwan.png'},
    {color:'Black',image:'assets/popUp/Black_tea_Wakoucha_Japan.png'},
    {color:'Oloong',image:'assets/popUp/Green_tea_ Matcha_Japan.png'},
    {color:'Perth',image:'assets/popUp/Green_tea_Biluochun_Jiangsu_China.png'},
    {color:'Dark',image:'assets/popUp/Oloong_tea_AnxiTieguanyin_Fujian_China.png'},
    {color:'White',image:'assets/popUp/PuErth_Naka_Menghai_China.png'},
    {color:'Harbel',image:'assets/popUp/Oloong_tea_DongDing_Nantou_Taiwan.png'}];

  constructor() { }

  ngOnInit(): void {
  }

}
