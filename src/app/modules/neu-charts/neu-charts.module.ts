import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NeuChartsComponent } from './neu-charts.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [NeuChartsComponent, PieChartComponent],
  exports: [
    NeuChartsComponent,
    PieChartComponent
  ]
})
export class NeuChartsModule { }
