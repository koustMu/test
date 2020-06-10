import {Component, Input, OnInit} from '@angular/core';
import {ProductCardResource} from '../../../../../core/api/SearchResponse';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card-theme.component.html',
  styleUrls: ['./special-card-theme.component.scss']
})
export class SpecialCardThemeComponent implements OnInit {

  @Input() card: ProductCardResource;

  // Add-ons (per ora non vengono usati)
  @Input() withBadge: boolean;
  @Input() withHeader: boolean;
  @Input() withFooter: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
