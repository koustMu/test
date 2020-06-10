import {Component, Input, OnInit} from '@angular/core';
import {GlobalVariable} from '../../../../../globals';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss']
})
export class CountryFlagComponent implements OnInit {
  urlFlagCountry: string;
  @Input() codeCountry: string;

  constructor() { }

  ngOnInit(): void {
    this.urlFlagCountry = GlobalVariable.urls.URL_FLAG_REPO + this.codeCountry + '.svg';
  }

}
