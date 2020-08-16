import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { SigninComponent } from './signin/signin.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService, AuthInterceptor, AuthGuard } from './auth.service';

import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { StudentreportComponent } from './studentreport/studentreport.component';
import {CarouselComponent} from './carousel/carousel.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
import { CarouselComponent } from './carousel/carousel.component';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 5bf26af17f4a52115c3bf07d59d0bb978e94e080

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
<<<<<<< HEAD
    StudentreportComponent,
    CarouselComponent,
    

    
    
=======
    CarouselComponent
>>>>>>> 5bf26af17f4a52115c3bf07d59d0bb978e94e080
  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    HttpClientModule,
<<<<<<< HEAD
    NgbModule
=======
    NgbModule,
>>>>>>> 5bf26af17f4a52115c3bf07d59d0bb978e94e080
  ],
  providers: [
    AuthService,
   
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [     //enables us to overlay a component on current screen
    LoginComponent,
    SigninComponent
  ],
})
export class AppModule { }
