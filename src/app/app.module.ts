import { HttpClientService } from './http-client.service';
import { HeroService } from './hero.service';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HeroService,HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
