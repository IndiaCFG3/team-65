import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SigninComponent} from './signin/signin.component';
import { AuthGuard } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path : '',component: HomeComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  //{path : 'signin',component:SigninComponent},
  //{path:'login',component : LoginComponent},
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
