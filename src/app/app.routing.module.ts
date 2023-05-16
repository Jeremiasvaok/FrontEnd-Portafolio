import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { PorfolioComponent } from "./Components/porfolio/porfolio.component";
import { NewExperienceComponent } from "./Components/experience/new-experience.component";
import { EditExperienceComponent } from "./Components/experience/edit-experience.component";
import { NewEducationComponent } from "./Components/education/new-education.components";
import { EditEducationComponent } from "./Components/education/edit-education.component";

const routes: Routes = [
 {path:'', component: PorfolioComponent, pathMatch:'full'},
 {path:'login', component: LoginComponent},
 { path: 'nuevaexp', component: NewExperienceComponent},
 { path: 'editexp/:id', component: EditExperienceComponent},
 { path: 'nuevaedu', component: NewEducationComponent},
 { path: 'editedu/:id', component: EditEducationComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}