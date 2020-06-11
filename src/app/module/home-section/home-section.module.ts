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
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ArticlesSectionHomeComponent} from "./components/mobile/smart/articles-section-home/articles-section-home.component";
import {BarSearchHomeComponent} from "./components/mobile/smart/bar-search-home/bar-search-home.component";
import {CategorySectionHomeComponent} from "./components/mobile/smart/category-section-home/category-section-home.component";
import {FrontViewSectionHomeComponent} from "./components/mobile/smart/front-view-section-home/front-view-section-home.component";
import {ProductsByCountrySectionHomeComponent} from "./components/mobile/smart/products-by-country-section-home/products-by-country-section-home.component";
import {ScarcitySectionHomeComponent} from "./components/mobile/smart/scarcity-section-home/scarcity-section-home.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { QuoteSectionComponent } from './components/mobile/smart/quote-section/quote-section.component';
import { QuickSearchSectionHomeComponent } from './components/mobile/smart/quick-search-section-home/quick-search-section-home.component';
import { SeoLinksSectionHomeComponent } from './components/mobile/smart/seo-links-section-home/seo-links-section-home.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [HomeControllerComponent,
    HomeDesktopPageComponent,
HomeMobilePageComponent,
    ArticlesSectionHomeComponent,
    BarSearchHomeComponent,
    CategorySectionHomeComponent,
    FrontViewSectionHomeComponent,
    ProductsByCountrySectionHomeComponent,
    ScarcitySectionHomeComponent,
    QuoteSectionComponent,
    QuickSearchSectionHomeComponent,
    SeoLinksSectionHomeComponent
  ],
    imports: [
        CommonModule,
        HomeSectionRoutingModule,
        SharedModule,
        MatButtonModule,
        FontAwesomeModule,
        MatMenuModule,

        MatCardModule,
        RouterModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule
    ]
})
export class HomeSectionModule { }
