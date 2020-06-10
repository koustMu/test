import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchSectionRoutingModule} from './search-section-routing.module';
import {SearchControllerComponent} from './controllers/search-controller/search-controller.component';
import {SearchPageDesktopComponent} from './pages/search-page-desktop/search-page-desktop.component';
import {SearchPageMobileComponent} from './pages/search-page-mobile/search-page-mobile.component';
import {SharedModule} from '../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {CountryFilterComponent} from './components/dumb/country-filter/country-filter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchResultsComponent} from './components/dumb/search-results/search-results.component';
import {TypeFilterComponent} from './components/dumb/type-filter/type-filter.component';
import {MatChipsModule} from '@angular/material/chips';
import {VarietySuggestsFilterComponent} from './components/dumb/variety-suggests-filter/variety-suggests-filter.component';
import {RoastToggleFilterComponent} from './components/dumb/roast-toggle-filter/roast-toggle-filter.component';
import {PressedToggleFilterComponent} from './components/dumb/pressed-toggle-filter/pressed-toggle-filter.component';
import {ElevationFilterComponent} from './components/dumb/elevation-filter/elevation-filter.component';
import {SeasonFilterComponent} from './components/dumb/season-filter/season-filter.component';
import {YearFilterComponent} from './components/dumb/year-filter/year-filter.component';
import {CertificatedOrganicFilterComponent} from './components/dumb/certificated-organic-filter/certificated-organic-filter.component';
import {SampleAvailableFilterComponent} from './components/dumb/sample-available-filter/sample-available-filter.component';
import {PriceFilterComponent} from './components/dumb/price-filter/price-filter.component';
import {AppliedFiltersComponent} from './components/dumb/applied-filters/applied-filters.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {RangeFilterComponent} from './components/dumb/range-filter/range-filter.component';
import {RangeFilterBarComponent} from './components/dumb/range-filter-bar/range-filter-bar.component';
import {SalvatoreComponent} from './components/dumb/salvatore/salvatore.component';
import {SortByPriceComponent} from './components/dumb/sort-by-price/sort-by-price.component';
import {VarietyFilterComponent} from './components/dumb/variety-filter/variety-filter.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {MatSliderModule} from '@angular/material/slider';
import {SliderModule} from 'primeng';
import { CountrySuggestsFilterComponent } from './components/dumb/country-suggests-filter/country-suggests-filter.component';
import { RangeFilterViewComponent } from './components/mobile/smart/range-filter-view/range-filter-view.component';


@NgModule({
  declarations: [
    SearchControllerComponent,
    SearchPageDesktopComponent,
    SearchPageMobileComponent,
    CountryFilterComponent,
    SearchResultsComponent,
    TypeFilterComponent,
    VarietySuggestsFilterComponent,
    RoastToggleFilterComponent,
    PressedToggleFilterComponent,
    ElevationFilterComponent,
    SeasonFilterComponent,
    YearFilterComponent,
    CertificatedOrganicFilterComponent,
    SampleAvailableFilterComponent,
    PriceFilterComponent,
    AppliedFiltersComponent,
    RangeFilterComponent,
    RangeFilterBarComponent,
    SalvatoreComponent,
    SortByPriceComponent,
    VarietyFilterComponent,
    CountrySuggestsFilterComponent,
    RangeFilterViewComponent
  ],
  imports: [
    CommonModule,
    SearchSectionRoutingModule,
    SharedModule,
    MatListModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatChipsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    NgSelectModule,
    MatSliderModule,
    SliderModule
  ],
  providers: [
  ]
})
export class SearchSectionModule {
}
