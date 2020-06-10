import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartControllerComponent} from './controllers/cart-controller/cart-controller.component';
import {AddressControllerComponent} from './controllers/address-controller/address-controller.component';
import {OrderControllerComponent} from './controllers/order-controller/order-controller.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {path: 'address', component: AddressControllerComponent},
        {path: 'order', component: OrderControllerComponent},
        {path: '', component: CartControllerComponent}
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartSectionRoutingModule {
}
