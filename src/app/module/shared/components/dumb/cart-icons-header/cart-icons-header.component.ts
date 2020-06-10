import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-icons-header',
  templateUrl: './cart-icons-header.component.html',
  styleUrls: ['./cart-icons-header.component.scss']
})
export class CartIconsHeaderComponent implements OnInit {
  @Input() productCart: number;

  constructor() { }

  ngOnInit(): void {
  }

}
