import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NeuChartsComponent } from './neu-charts.component';
import { PieChartComponent } from './components/pie/pie-chart/pie-chart.component';
import { DonutChartComponent } from './components/pie/donut-chart/donut-chart.component';
import { NoDataComponent } from './utils/no-data.component';
import { DonutAdvancedComponent } from './components/pie/donut-advanced/donut-advanced.component';
import { DonutGridComponent } from './components/pie/donut-grid/donut-grid.component';
import { BarVerticalComponent } from './components/bar/bar-vertical/bar-vertical.component';
import { BarHorizontalComponent } from './components/bar/bar-horizontal/bar-horizontal.component';

let PIECOMPONENTS = [ PieChartComponent, DonutChartComponent, DonutAdvancedComponent, DonutGridComponent ];
let BARCOMPONENTS = [ BarVerticalComponent, BarHorizontalComponent ];

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [ NeuChartsComponent, NoDataComponent,  ...PIECOMPONENTS, ...BARCOMPONENTS ],
  exports: [
    ...PIECOMPONENTS,
    ...BARCOMPONENTS
  ]
})
export class NeuChartsModule { }
