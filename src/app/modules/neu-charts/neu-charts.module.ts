import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NeuChartsComponent } from './neu-charts.component';
import { PieChartComponent } from './components/pie/pie-chart/pie-chart.component';
import { DonutChartComponent } from './components/pie/donut-chart/donut-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [NeuChartsComponent, PieChartComponent, DonutChartComponent],
  exports: [
    NeuChartsComponent,
    PieChartComponent,
    DonutChartComponent
  ]
})
export class NeuChartsModule { }
