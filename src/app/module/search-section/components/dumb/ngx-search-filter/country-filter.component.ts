// import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import {FormControl} from "@angular/forms";
// import {ReplaySubject, Subject} from "rxjs";
// import {MatSelect} from "@angular/material/select";
// import {take, takeUntil} from "rxjs/operators";
// import {Country, COUNTRY_FAKE_LIST} from "../variety-filter/variety-filter.component";
//
// @Component({
//   selector: 'app-country-filter',
//   templateUrl: './country-filter.component.html',
//   styleUrls: ['./country-filter.component.scss']
// })
// export class CountryFilterComponent implements OnInit, AfterViewInit, OnDestroy {
//
//   toppings = new FormControl();
//
//   toppingList: string[] = ['Oolong wlong', 'Green tea', 'Black tea', 'Puerth tea', 'Matcha', 'Yellow tea'];
//
//
//   /** list of banks */
//   protected countries: Country[] = COUNTRY_FAKE_LIST;
//
//   /** control for the selected bank for multi-selection */
//   public bankMultiCtrl: FormControl = new FormControl();
//
//   /** control for the MatSelect filter keyword multi-selection */
//   public bankMultiFilterCtrl: FormControl = new FormControl();
//
//   /** list of banks filtered by search keyword */
//   public filteredBanksMulti: ReplaySubject<Country[]> = new ReplaySubject<Country[]>(1);
//
//   @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;
//
//   /** Subject that emits when the component has been destroyed. */
//   protected _onDestroy = new Subject<void>();
//
//
//   constructor() { }
//
//   ngOnInit() {
//     // set initial selection
//     this.bankMultiCtrl.setValue([]);
//
//     // load the initial bank list
//     this.filteredBanksMulti.next(this.countries.slice());
//
//     // listen for search field value changes
//     this.bankMultiFilterCtrl.valueChanges
//       .pipe(takeUntil(this._onDestroy))
//       .subscribe(() => {
//         this.filterBanksMulti();
//       });
//   }
//
//   ngAfterViewInit() {
//     this.setInitialValue();
//   }
//
//   ngOnDestroy() {
//     this._onDestroy.next();
//     this._onDestroy.complete();
//   }
//
//   /**
//    * Sets the initial value after the filteredBanks are loaded initially
//    */
//   protected setInitialValue() {
//     this.filteredBanksMulti
//       .pipe(take(1), takeUntil(this._onDestroy))
//       .subscribe(() => {
//         // setting the compareWith property t o a comparison function
//         // triggers initializing the selection according to the initial value of
//         // the form control (i.e. _initializeSelection())
//         // this needs to be done after the filteredBanks are loaded initially
//         // and after the mat-option elements are available
//         this.multiSelect.compareWith = (a: Country, b: Country) => a && b && a.id === b.id;
//       });
//   }
//
//   protected filterBanksMulti() {
//     if (!this.countries) {
//       return;
//     }
//     // get the search keyword
//     let search = this.bankMultiFilterCtrl.value;
//     if (!search) {
//       this.filteredBanksMulti.next(this.countries.slice());
//       return;
//     } else {
//       search = search.toLowerCase();
//     }
//     // filter the banks
//     this.filteredBanksMulti.next(
//       this.countries.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
//     );
//   }
//
//
//
// }
