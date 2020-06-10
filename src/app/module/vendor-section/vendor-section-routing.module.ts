import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VendorControllerComponent} from './controllers/vendor-controller/vendor-controller.component';


const routes: Routes = [
  {
    path: '',
    component: VendorControllerComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorSectionRoutingModule {
}
