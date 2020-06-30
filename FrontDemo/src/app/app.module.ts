import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgApexchartsModule} from 'ng-apexcharts';
import { ChartsComponent } from './chart1/charts.component';
import { Chart2Component } from './chart2/chart2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    Chart2Component,
    Chart2Component
  ],
  imports: [
    BrowserModule, HttpClientModule, NgApexchartsModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
