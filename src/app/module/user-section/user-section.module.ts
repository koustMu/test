import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSectionRoutingModule } from './user-section-routing.module';
import { UserControllerComponent } from './controllers/user-controller/user-controller.component';
import { UserPageDesktopComponent } from './pages/user-page-desktop/user-page-desktop.component';
import { UserPageMobileComponent } from './pages/user-page-mobile/user-page-mobile.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AddressFrameUserComponent} from "./components/mobile/smart/address-frame-user/address-frame-user.component";
import {FavoritesFrameUserComponent} from "./components/mobile/smart/favorites-frame-user/favorites-frame-user.component";
import {OrdersFrameUserComponent} from "./components/mobile/smart/orders-frame-user/orders-frame-user.component";
import {SettingsFrameUserComponent} from "./components/mobile/smart/settings-frame-user/settings-frame-user.component";
import {UserInfoFrameUserComponent} from "./components/mobile/smart/user-info-frame-user/user-info-frame-user.component";
import {VerticalMenuUserComponent} from "./components/mobile/smart/vertical-menu-user/vertical-menu-user.component";


@NgModule({
  declarations: [UserControllerComponent,
UserPageDesktopComponent,
UserPageMobileComponent,
    AddressFrameUserComponent,
    FavoritesFrameUserComponent,
    OrdersFrameUserComponent,
    SettingsFrameUserComponent,
    UserInfoFrameUserComponent,
    VerticalMenuUserComponent
  ],
  imports: [
    CommonModule,
    UserSectionRoutingModule,
    SharedModule,
    MatButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class UserSectionModule { }
