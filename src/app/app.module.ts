import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './module/core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {icons} from './module/shared/icons';
import {MatCardModule} from '@angular/material/card';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {SharedModule} from './module/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
