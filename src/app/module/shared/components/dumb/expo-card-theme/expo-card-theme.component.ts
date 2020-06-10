import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../core/api/ArticlesResponse';

@Component({
  selector: 'app-expo-card-theme',
  templateUrl: './expo-card-theme.component.html',
  styleUrls: ['./expo-card-theme.component.scss']
})
export class ExpoCardThemeComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
