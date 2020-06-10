import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardSectionRoutingModule} from './card-section-routing.module';
import {CardPageDesktopComponent} from './pages/card-page-desktop/card-page-desktop.component';
import {CardPageMobileComponent} from './pages/card-page-mobile/card-page-mobile.component';
import {CardControllerComponent} from './controllers/card-controller/card-controller.component';
import {SharedModule} from '../shared/shared.module';
import {FlexModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AdditionalInformationCardComponent} from "./components/mobile/smart/additional-information-card/additional-information-card.component";
import {RecapProductCardComponent} from "./components/mobile/smart/recap-product-card/recap-product-card.component";
import {ReviewRatingCardComponent} from "./components/mobile/smart/review-rating-card/review-rating-card.component";
import {ReviewUserCardComponent} from "./components/mobile/smart/review-user-card/review-user-card.component";
import {VariantsBoxCardComponent} from "./components/mobile/smart/variants-box-card/variants-box-card.component";


@NgModule({
  declarations: [
    CardPageDesktopComponent,
    CardPageMobileComponent,
    CardControllerComponent,
    AdditionalInformationCardComponent,
    RecapProductCardComponent,
    ReviewRatingCardComponent,
    ReviewUserCardComponent,
    VariantsBoxCardComponent

  ],
  imports: [
    CommonModule,
    CardSectionRoutingModule,
    SharedModule,
    FlexModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class CardSectionModule {
}
