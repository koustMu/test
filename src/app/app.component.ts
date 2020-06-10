import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from './module/core/service/local-storage.service';
import {GlobalVariable} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.localStorage.getCountries().subscribe(
      (countriesList) => {
        localStorage.setItem(GlobalVariable.localStorage.COUNTRIES_LIST, JSON.stringify(countriesList.countries));
      },
      () => {
        localStorage.setItem('', 'Error Countries List');
      }
    );
  }
}
