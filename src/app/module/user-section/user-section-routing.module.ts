import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserControllerComponent} from './controllers/user-controller/user-controller.component';
import {UserInfoFrameUserComponent} from "./components/mobile/smart/user-info-frame-user/user-info-frame-user.component";
import {FavoritesFrameUserComponent} from "./components/mobile/smart/favorites-frame-user/favorites-frame-user.component";
import {AddressFrameUserComponent} from "./components/mobile/smart/address-frame-user/address-frame-user.component";
import {OrdersFrameUserComponent} from "./components/mobile/smart/orders-frame-user/orders-frame-user.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserControllerComponent,
        children: [
          {path: '', redirectTo: 'userinfo', pathMatch: 'full'},
          {path: 'userinfo', component: UserInfoFrameUserComponent},
          {path: 'favorites', component: FavoritesFrameUserComponent},
          {path: 'address', component: AddressFrameUserComponent},
          {path: 'orders', component: OrdersFrameUserComponent},
        ]
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSectionRoutingModule {
}
