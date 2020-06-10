import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterWidgetComponent} from './components/dumb/counter-widget/counter-widget.component';
import {IfEmptyPipe} from './pipes/if-empty.pipe';
import {MaxQuantityPipe} from './pipes/max-quantity.pipe';
import {SingleInputButtonComponent} from './components/dumb/single-input-button/single-input-button.component';
import {LandingModuleControllerComponent} from './controllers/landing-module-controller/landing-module-controller.component';
import {HeaderPageDesktopComponent} from './layout/header-page-desktop/header-page-desktop.component';
import {HeaderPageMobileComponent} from './layout/header-page-mobile/header-page-mobile.component';
import {FooterPageDesktopComponent} from './layout/footer-page-desktop/footer-page-desktop.component';
import {FooterPageMobileComponent} from './layout/footer-page-mobile/footer-page-mobile.component';
import {HeaderControllerComponent} from './controllers/header-controller/header-controller.component';
import {FooterControllerComponent} from './controllers/footer-controller/footer-controller.component';
import {RouterModule} from '@angular/router';
import {DebounceClickDirective} from './directives/debounce-click.directive';
import {ResponsiveService} from '../core/service/responsive.service';
import {ProductCardComponent} from './components/smart/product-card/product-card.component';
import {ExpoCardThemeComponent} from './components/dumb/expo-card-theme/expo-card-theme.component';
import {EmptyCardThemeComponent} from './components/dumb/empty-card-theme/empty-card-theme.component';
import {SpecialCardThemeComponent} from './components/dumb/product-card/special-card-theme/special-card-theme.component';
import {StandardCardThemeComponent} from './components/dumb/product-card/standard-card-theme/standard-card-theme.component';
import {TagsComponent} from './components/dumb/product-card/tags/tags.component';
import {CardCtaComponent} from './components/dumb/product-card/card-cta/card-cta.component';
import {PriceInfoComponent} from './components/dumb/product-card/price-info/price-info.component';
import {RatingComponent} from './components/dumb/product-card/rating/rating.component';
import {AddonBadgeComponent} from './components/dumb/product-card/addon-badge/addon-badge.component';
import {AddonFooterComponent} from './components/dumb/product-card/addon-footer/addon-footer.component';
import {AddonHeaderComponent} from './components/dumb/product-card/addon-header/addon-header.component';
import {CheckmarksComponent} from './components/dumb/product-card/checkmarks/checkmarks.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddonSellingAlertsComponent} from './components/dumb/product-card/addon-selling-alert/addon-selling-alerts.component';
import {FlexModule} from '@angular/flex-layout';
import {ManageResponsiveComponent} from './components/smart/manage-responsive/manage-responsive.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {AddonLimitedDealComponent} from './components/dumb/product-card/addon-limited-deal/addon-limited-deal.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {RecommendationSectionComponent} from './components/smart/recommendation-section/recommendation-section.component';
import {CarouselModule} from "primeng";
import {AddPercentageStringPipe} from './pipes/add-percentage-string.pipe';
import {ReviewStarsBoxCardComponent} from './components/smart/review-stars-box-card/review-stars-box-card.component';
import {StarReviewCardComponent} from './components/dumb/star-review-card/star-review-card.component';
import {CapitalCasePipe} from './pipes/capital-case.pipe';
import {SlitStringPipe} from './pipes/slit-string.pipe';
import {RecapCardAddressComponent} from './components/dumb/recap-card-address/recap-card-address.component';
import {FormUpsertAddressComponent} from './components/dumb/form-upsert-address/form-upsert-address.component';
import {AddNewAddressComponent} from './components/dumb/add-new-address/add-new-address.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ShippingCountryButtonAddressComponent} from './components/dumb/shipping-country-button-address/shipping-country-button-address.component';
import {MatMenuModule} from '@angular/material/menu';
import {ReactiveFormsModule} from '@angular/forms';
import {CountryFlagComponent} from './components/dumb/country-flag/country-flag.component';
import {TeascannerLongLogComponent} from './components/dumb/teascanner-long-log/teascanner-long-log.component';
import {DropDownTypeHeaderComponent} from './components/dumb/drop-down-type-header/drop-down-type-header.component';
import {SearchBarHeaderComponent} from './components/dumb/search-bar-header/search-bar-header.component';
import {CartIconsHeaderComponent} from './components/dumb/cart-icons-header/cart-icons-header.component';
import {PreFooterComponent} from './components/dumb/pre-footer/pre-footer.component';
import {SecurePaymentCardComponent} from './components/dumb/secure-payment-card/secure-payment-card.component';
import { SpecialCardCTAComponent } from './components/smart/special-card-cta/special-card-cta.component';
import { AddLastObjectPipe } from './pipes/add-last-object.pipe';
import { FilterCountriesPipe } from './pipes/filter-countries.pipe';
import { DropdownMenuHeaderComponent } from './components/smart/dropdown-menu-header/dropdown-menu-header.component';
import { DropdownTeaCategoryHeaderComponent } from './components/dumb/dropdown-tea-category-header/dropdown-tea-category-header.component';
import { DropdownTeawareCategoryHeaderComponent } from './components/dumb/dropdown-teaware-category-header/dropdown-teaware-category-header.component';
import { SpinnerProgressLoadingComponent } from './components/dumb/spinner-progress-loading/spinner-progress-loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ActionProductCardComponent } from './components/dumb/product-card/action-product-card/action-product-card.component';
import { SearchResultLoadingIndicator } from './components/dumb/loading-indicators/search-results-loading-indicator/search-result-loading-indicator.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ProductCardComponent,
    ExpoCardThemeComponent,
    EmptyCardThemeComponent,
    SpecialCardThemeComponent,
    StandardCardThemeComponent,
    TagsComponent,
    CardCtaComponent,
    PriceInfoComponent,
    RatingComponent,
    AddonBadgeComponent,
    AddonFooterComponent,
    CheckmarksComponent,
    AddonHeaderComponent,
    AddonSellingAlertsComponent,
    ManageResponsiveComponent,
    CounterWidgetComponent,
    IfEmptyPipe,
    SingleInputButtonComponent,
    LandingModuleControllerComponent,
    HeaderPageDesktopComponent,
    HeaderPageMobileComponent,
    FooterPageDesktopComponent,
    FooterPageMobileComponent,
    HeaderControllerComponent,
    FooterControllerComponent,
    DebounceClickDirective,
    RecommendationSectionComponent,
    AddonLimitedDealComponent,
    AddPercentageStringPipe,
    ReviewStarsBoxCardComponent,
    StarReviewCardComponent,
    CapitalCasePipe,
    SlitStringPipe,
    MaxQuantityPipe,
    RecapCardAddressComponent,
    FormUpsertAddressComponent,
    AddNewAddressComponent,
    ShippingCountryButtonAddressComponent,
    CountryFlagComponent,
    TeascannerLongLogComponent,
    DropDownTypeHeaderComponent,
    SearchBarHeaderComponent,
    CartIconsHeaderComponent,
    PreFooterComponent,
    SecurePaymentCardComponent,
    SpecialCardCTAComponent,
    AddLastObjectPipe,
    FilterCountriesPipe,
    DropdownMenuHeaderComponent,
    DropdownTeaCategoryHeaderComponent,
    DropdownTeawareCategoryHeaderComponent,
    SpinnerProgressLoadingComponent,
    ActionProductCardComponent,
    SearchResultLoadingIndicator
  ],
    imports: [
        MatSliderModule,
        FormsModule,
        MatDividerModule,
        MatButtonModule,
        MatInputModule,
        CommonModule,
        CarouselModule,
        MatCardModule,
        MatIconModule,
        FontAwesomeModule,
        FlexModule,
        RouterModule,
        MatCheckboxModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatListModule
    ],
    exports: [
        ManageResponsiveComponent,
        CounterWidgetComponent,
        IfEmptyPipe,
        MaxQuantityPipe,
        SingleInputButtonComponent,
        ProductCardComponent,
        PriceInfoComponent,
        TagsComponent,
        RatingComponent,
        CheckmarksComponent,
        AddonSellingAlertsComponent,
        AddonLimitedDealComponent,
        AddonBadgeComponent,
        AddonHeaderComponent,
        AddonFooterComponent,
        RecommendationSectionComponent,
        AddonFooterComponent,
        AddPercentageStringPipe,
        ReviewStarsBoxCardComponent,
        CapitalCasePipe,
        SlitStringPipe,
        LandingModuleControllerComponent,
        RecapCardAddressComponent,
        FormUpsertAddressComponent,
        AddNewAddressComponent,
        ShippingCountryButtonAddressComponent,
        CountryFlagComponent,
        DebounceClickDirective,
        SecurePaymentCardComponent,
        TeascannerLongLogComponent,
        ExpoCardThemeComponent,
        SpecialCardThemeComponent,
        SpecialCardCTAComponent,
        PreFooterComponent,
        FooterPageDesktopComponent,
        FooterPageMobileComponent,
        AddLastObjectPipe,
        FilterCountriesPipe,
        SpinnerProgressLoadingComponent,
      SearchResultLoadingIndicator,
      
    ],
  providers: [
    ResponsiveService
  ]
})
export class SharedModule {
}
