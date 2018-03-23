import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NeuChartsComponent } from './neu-charts.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [NeuChartsComponent],
  exports: [
    NeuChartsComponent   
  ]
})
export class NeuChartsModule { }
