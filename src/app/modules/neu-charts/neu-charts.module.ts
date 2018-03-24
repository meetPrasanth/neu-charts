import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NeuChartsComponent } from './neu-charts.component';
import { PieChartComponent } from './components/pie/pie-chart/pie-chart.component';
import { DonutChartComponent } from './components/pie/donut-chart/donut-chart.component';
import { NoDataComponent } from './utils/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [NeuChartsComponent, PieChartComponent, DonutChartComponent, NoDataComponent],
  exports: [
    PieChartComponent,
    DonutChartComponent
  ]
})
export class NeuChartsModule { }
