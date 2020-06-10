import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-controller',
  templateUrl: './cart-controller.component.html',
  styleUrls: ['./cart-controller.component.scss']
})
export class CartControllerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('carico controller');
  }

}
