import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeControllerComponent} from './controllers/home-controller/home-controller.component';


const routes: Routes = [
  {
    path: '',
    component: HomeControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeSectionRoutingModule {
}
