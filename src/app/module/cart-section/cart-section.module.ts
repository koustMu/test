import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartSectionRoutingModule} from './cart-section-routing.module';
import {CartControllerComponent} from './controllers/cart-controller/cart-controller.component';
import {SharedModule} from '../shared/shared.module';
import {CartPageDesktopComponent} from './page/cart-page-desktop/cart-page-desktop.component';
import {CartPageMobileComponent} from './page/cart-page-mobile/cart-page-mobile.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LogService} from '../core/service/log.service';
import {AddressPageDesktopComponent} from './page/address-page-desktop/address-page-desktop.component';
import {AddressPageMobileComponent} from './page/address-page-mobile/address-page-mobile.component';
import {OrderPageDesktopComponent} from './page/order-page-desktop/order-page-desktop.component';
import {OrderControllerComponent} from './controllers/order-controller/order-controller.component';
import {AddressControllerComponent} from './controllers/address-controller/address-controller.component';
import {OrderPageMobileComponent} from './page/order-page-mobile/order-page-mobile.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AddressSectionComponent} from "./component/mobile/smart/address-section/address-section.component";
import {CardItemOrderComponent} from "./component/mobile/smart/card-item-order/card-item-order.component";
import {CardItemSmartComponent} from "./component/mobile/smart/card-item-smart/card-item-smart.component";
import {OrderSupplierComponent} from "./component/mobile/smart/order-supplier/order-supplier.component";
import {RecapSectionComponent} from "./component/mobile/smart/recap-section/recap-section.component";
import {RecapSectionOrderComponent} from "./component/mobile/smart/recap-section-order/recap-section-order.component";
import {SubOrderSupplierOrderComponent} from "./component/mobile/smart/sub-order-supplier-order/sub-order-supplier-order.component";


@NgModule({
  declarations: [
    CartControllerComponent,
    CartPageDesktopComponent,
    CartPageMobileComponent,
    AddressPageDesktopComponent,
    AddressPageMobileComponent,
    OrderPageDesktopComponent,
    OrderControllerComponent,
    AddressControllerComponent,
    OrderPageMobileComponent,
    AddressSectionComponent,
    CardItemOrderComponent,
    CardItemSmartComponent,
    OrderSupplierComponent,
    RecapSectionComponent,
    RecapSectionOrderComponent,
    SubOrderSupplierOrderComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CartSectionRoutingModule,
    FontAwesomeModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    LogService
  ]
})
export class CartSectionModule {
}
