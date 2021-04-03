import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LandingComponent } from "./components/landing/landing.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'landing/:id', component: LandingComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }