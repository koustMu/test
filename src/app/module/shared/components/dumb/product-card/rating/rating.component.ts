import {Component, Input, OnInit} from '@angular/core';
import {ReviewData} from '../../../../../core/api/ProductCardResponse';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: ReviewData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.rating);
  }

}
