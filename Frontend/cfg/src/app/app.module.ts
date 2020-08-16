import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { baseURL } from './shared files/baseurl';

import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
=======
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import { SigninComponent } from './signin/signin.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService, AuthInterceptor, AuthGuard } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> bc08f81be15d14dc71ebf359fc383ddb10f02c28

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FormComponent
=======
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    
>>>>>>> bc08f81be15d14dc71ebf359fc383ddb10f02c28
  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [{provide: 'BaseURL', useValue: baseURL},
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
  bootstrap: [AppComponent]
=======
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
    FlexLayoutModule,
    HttpClientModule,
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
>>>>>>> bc08f81be15d14dc71ebf359fc383ddb10f02c28
})
export class AppModule { }
