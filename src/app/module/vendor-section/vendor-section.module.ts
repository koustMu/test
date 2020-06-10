import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorSectionRoutingModule } from './vendor-section-routing.module';
import {VendorControllerComponent} from "./controllers/vendor-controller/vendor-controller.component";
import {VendorPageDesktopComponent} from "./pages/vendor-page-desktop/vendor-page-desktop.component";
import {VendorPageMobileComponent} from "./pages/vendor-page-mobile/vendor-page-mobile.component";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {MostPopularAccessoriesComponent} from "./components/mobile/smart/most-popular-accessories/most-popular-accessories.component";
import {MostPopularTeaComponent} from "./components/mobile/smart/most-popular-tea/most-popular-tea.component";
import {VendorInfoComponent} from "./components/mobile/smart/vendor-info/vendor-info.component";


@NgModule({
  declarations: [
    VendorControllerComponent,
    VendorPageDesktopComponent,
    VendorPageMobileComponent,
    MostPopularAccessoriesComponent,
    MostPopularTeaComponent,
    VendorInfoComponent
  ],
  imports: [
    CommonModule,
    VendorSectionRoutingModule,
    SharedModule,
    MatIconModule,
    FlexModule,
    FontAwesomeModule,
    MatButtonModule
  ]
})
export class VendorSectionModule { }

