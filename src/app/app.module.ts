import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleModule } from './modules/simple-module/index';

import { WelcomeComponent } from './welcome.component';
import { ByeComponent } from './bye.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ByeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
