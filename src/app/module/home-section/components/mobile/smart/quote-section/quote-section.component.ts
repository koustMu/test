import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent implements OnInit {

  data=[
    {color:'Green',image:'assets/images/tea-product-sample.png'},
    {color:'Yellow',image:'assets/images/leaf-24-transparent.png'},
    {color:'Black',image:'assets/images/leaf-24.png'},
    {color:'Oloong',image:'assets/images/tea-product-sample.png'},
    {color:'Perth',image:'assets/images/leaf-24.png'},
    {color:'Dark',image:'assets/images/leaf-24-transparent.png'},
    {color:'White',image:'assets/images/leaf-24-transparent.png'},
    {color:'Harbel',image:'assets/images/leaf-24.png'}];

  constructor() { }

  ngOnInit(): void {
  }

}
