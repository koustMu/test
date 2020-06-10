import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardControllerComponent} from './controllers/card-controller/card-controller.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: CardControllerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardSectionRoutingModule {
}
