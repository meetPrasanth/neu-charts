// Build-in
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Dependencies
import { NgxGraphModule } from '@swimlane/ngx-graph';
// User defined
import { NeuGraphComponent } from './neu-graph.component';
import { DirectedGraphComponent } from './component/directed-graph/directed-graph.component';
import { NoDataComponent } from './component/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    NgxGraphModule
  ],
  declarations: [NeuGraphComponent, DirectedGraphComponent, NoDataComponent],
  exports: [NeuGraphComponent, DirectedGraphComponent]
})
export class NeuGraphModule { }
