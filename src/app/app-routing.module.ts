import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingModuleControllerComponent} from './module/shared/controllers/landing-module-controller/landing-module-controller.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./module/home-section/home-section.module').then(m => m.HomeSectionModule)
  }, {
    path: '',
    component: LandingModuleControllerComponent,
    children: [
      {
        path: 'card/:id',
        loadChildren: () => import('./module/card-section/card-section.module').then(m => m.CardSectionModule),
      },
      {
        path: 'vendors/:id',
        loadChildren: () => import('./module/vendor-section/vendor-section.module').then(m => m.VendorSectionModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./module/search-section/search-section.module').then(m => m.SearchSectionModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./module/cart-section/cart-section.module').then(m => m.CartSectionModule)
      },
      {
        path: 'card/:id',
        loadChildren: () => import('./module/card-section/card-section.module').then(m => m.CardSectionModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./module/user-section/user-section.module').then(m => m.UserSectionModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
