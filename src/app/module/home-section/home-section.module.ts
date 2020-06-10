import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSectionRoutingModule } from './home-section-routing.module';
import { HomeControllerComponent } from './controllers/home-controller/home-controller.component';
import { HomeDesktopPageComponent } from './pages/home-desktop-page/home-desktop-page.component';
import { HomeMobilePageComponent } from './pages/home-mobile-page/home-mobile-page.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import {CarouselModule} from 'primeng';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ArticlesSectionHomeComponent} from "./components/mobile/smart/articles-section-home/articles-section-home.component";
import {BarSearchHomeComponent} from "./components/mobile/smart/bar-search-home/bar-search-home.component";
import {CategorySectionHomeComponent} from "./components/mobile/smart/category-section-home/category-section-home.component";
import {FrontViewSectionHomeComponent} from "./components/mobile/smart/front-view-section-home/front-view-section-home.component";
import {ProductsByCountrySectionHomeComponent} from "./components/mobile/smart/products-by-country-section-home/products-by-country-section-home.component";
import {ScarcitySectionHomeComponent} from "./components/mobile/smart/scarcity-section-home/scarcity-section-home.component";


@NgModule({
  declarations: [HomeControllerComponent,
    HomeDesktopPageComponent,
HomeMobilePageComponent,
    ArticlesSectionHomeComponent,
    BarSearchHomeComponent,
    CategorySectionHomeComponent,
    FrontViewSectionHomeComponent,
    ProductsByCountrySectionHomeComponent,
    ScarcitySectionHomeComponent
  ],
    imports: [
        CommonModule,
        HomeSectionRoutingModule,
        SharedModule,
        MatButtonModule,
        FontAwesomeModule,
        MatMenuModule,
        CarouselModule,
        MatCardModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeSectionModule { }
