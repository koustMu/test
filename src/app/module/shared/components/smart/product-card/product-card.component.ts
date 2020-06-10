import {Component, Input, OnInit} from '@angular/core';
import {productCardResourceFake} from '../../../../search-section/mock/SearchResponseFake';
import {ProductCardResource} from '../../../../core/api/SearchResponse';
import {AppComponent} from '../../../../../app.component';
import {Observable} from 'rxjs';
import {conditionallyCreateMapObjectLiteral} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() card: ProductCardResource;

  constructor() {
  }

  ngOnInit(): void {
  }

}
