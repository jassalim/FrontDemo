import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartsComponent} from './chart1/charts.component';
import {Chart2Component} from './chart2/chart2.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
