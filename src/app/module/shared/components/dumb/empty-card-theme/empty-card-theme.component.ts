import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-empty-card-theme',
  templateUrl: './empty-card-theme.component.html',
  styleUrls: ['./empty-card-theme.component.scss']
})
export class EmptyCardThemeComponent implements OnInit {

  cardType: string = 'empty-card';


  constructor() { }

  ngOnInit(): void {
  }

}
