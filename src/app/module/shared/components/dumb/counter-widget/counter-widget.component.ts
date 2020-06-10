import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-widget',
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.scss']
})
export class CounterWidgetComponent implements OnInit {
  @Input() currentQuantity: number;
  @Input() maxQuantity: number;
  @Output() currentQuantityChange: EventEmitter<number> = new EventEmitter<number>();
  private INCREASE_QUANTITY = '+';
  private DECREASE_QUANTITY = '-';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeQuantity(value: string) {
    if (this.INCREASE_QUANTITY === value && this.maxQuantity > this.currentQuantity) {
       ++this.currentQuantity;
    }
    if (this.DECREASE_QUANTITY === value) {
      if (this.currentQuantity === 1) {
        console.log('minimum quantity reached');
      } else {
        --this.currentQuantity;
      }
    }
    this.currentQuantityChange.emit(this.currentQuantity);
  }

}
