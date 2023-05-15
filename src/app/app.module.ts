import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { PorfolioComponent } from './Components/porfolio/porfolio.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { AboutComponent } from './Components/about/about.component';
import { EducationComponent } from './Components/education/education.component';
import { hardSoftComponent } from './Components/hardSoft/hardSoft.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PorfolioComponent,
    EducationComponent,
    AboutComponent,
    ExperienceComponent,
    hardSoftComponent,
    ProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
