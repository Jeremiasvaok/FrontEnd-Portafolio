import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { PorfolioComponent } from './Components/porfolio/porfolio.component';
import { AcercaDeComponent } from './Components/AcercaDe/acercaDe.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PorfolioComponent,
    AcercaDeComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
