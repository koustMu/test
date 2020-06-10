import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-stars-box-card',
  templateUrl: './review-stars-box-card.component.html',
  styleUrls: ['./review-stars-box-card.component.scss']
})
export class ReviewStarsBoxCardComponent implements OnInit {

  @Input() reviewValue: number;
  @Input() identify: string;

  starList = [
    {
      startFull: 0,
      endEmpty: 0,
      borderEmpty: 0,
      borderFull: 0
    },
    {
      startFull: 0,
      endEmpty: 0,
      borderEmpty: 0,
      borderFull: 0
    }, {
      startFull: 0,
      endEmpty: 0,
      borderEmpty: 0,
      borderFull: 0
    }, {
      startFull: 0,
      endEmpty: 0,
      borderEmpty: 0,
      borderFull: 0
    }, {
      startFull: 0,
      endEmpty: 0,
      borderEmpty: 0,
      borderFull: 0
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    const integerStar = Math.floor(this.reviewValue);
    const decimalStar = Math.round((this.reviewValue % 1) * 100);
    this.starList.map(
      (star, index) => {
        if (index < integerStar) {
          star.endEmpty = 0;
          star.borderEmpty = 0;
          star.borderFull = 0;
          star.startFull = 100;
        } else if (index === integerStar) {
          star.endEmpty = 100;
          star.borderEmpty = decimalStar + 1;
          star.borderFull = decimalStar;
          star.startFull = 0;
        } else {
          star.endEmpty = 100;
          star.borderEmpty = 0;
          star.borderFull = 0;
          star.startFull = 0;
        }
      }
    );
  }

}
