import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchControllerComponent} from './controllers/search-controller/search-controller.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: SearchControllerComponent,
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSectionRoutingModule {
}
