import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { PorfolioComponent } from './Components/porfolio/porfolio.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { AboutComponent } from './Components/about/about.component';
import { EducationComponent } from './Components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PorfolioComponent,
    EducationComponent,
    AboutComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
