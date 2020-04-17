import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { ByeComponent } from './bye.component';
import { AppComponent } from './app.component';

import { FeatureModule } from './modules/feature-module/index';

@NgModule({
  declarations: [
    WelcomeComponent,
    ByeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
