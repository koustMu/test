import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'addon-footer',
  templateUrl: './addon-footer.component.html',
  styleUrls: ['./addon-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddonFooterComponent implements OnInit {

  @Input() price: number;
  @Input() discountedPrice: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
