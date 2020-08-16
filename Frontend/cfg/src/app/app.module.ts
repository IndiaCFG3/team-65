import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
})
export class AppModule { }
