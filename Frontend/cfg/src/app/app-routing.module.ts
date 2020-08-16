import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SigninComponent} from './signin/signin.component';
import { AuthGuard } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentreportComponent } from './studentreport/studentreport.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
<<<<<<< HEAD
  
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'report',component:StudentreportComponent},
  {path:'carousel',component:CarouselComponent}
=======
  {path : '',component: HomeComponent},
  { path:'dashboard',component:DashboardComponent},
>>>>>>> 5bf26af17f4a52115c3bf07d59d0bb978e94e080
  //{path : 'signin',component:SigninComponent},
  //{path:'login',component : LoginComponent},
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
