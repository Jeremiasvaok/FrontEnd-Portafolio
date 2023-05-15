import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { PorfolioComponent } from "./Components/porfolio/porfolio.component";

const routes: Routes = [
 {path:'', component: PorfolioComponent, pathMatch:'full'},
 {path:'login', component: LoginComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}