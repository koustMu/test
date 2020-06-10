import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-review-card',
  templateUrl: './star-review-card.component.html',
  styleUrls: ['./star-review-card.component.scss']
})
export class StarReviewCardComponent implements OnInit {
  @Input() startFull: number;
  @Input() endEmpty: number;
  @Input() borderEmpty: number;
  @Input() borderFull: number;
  @Input() id: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
