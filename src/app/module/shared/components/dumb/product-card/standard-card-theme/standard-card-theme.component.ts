import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductCardResource} from "../../../../../core/api/SearchResponse";

@Component({
  selector: 'app-standard-card-theme',
  templateUrl: './standard-card-theme.component.html',
  styleUrls: ['./standard-card-theme.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StandardCardThemeComponent implements OnInit {

  @Input() card?: ProductCardResource;

  constructor() { }

  ngOnInit(): void {
  }

}
