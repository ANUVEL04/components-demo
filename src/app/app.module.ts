import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TimelineModule} from 'primeng/timeline';
import{HttpClientModule}from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { CardModule } from "primeng/card";
import { TimeComponent } from './time/time.component';
import {InputTextModule} from 'primeng/inputtext';




@NgModule({
  declarations: [
    AppComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TimelineModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    CardModule,
    InputTextModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
