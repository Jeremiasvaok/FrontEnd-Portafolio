import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { PorfolioComponent } from './Components/porfolio/porfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
