import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeuChartsComponent } from './neu-charts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NeuChartsComponent],
  exports: [
    NeuChartsComponent   
  ]
})
export class NeuChartsModule { }
