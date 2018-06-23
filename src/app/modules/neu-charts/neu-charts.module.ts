import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { NeuChartsComponent } from './neu-charts.component';
import { PieChartComponent } from './components/pie/pie-chart/pie-chart.component';
import { DonutChartComponent } from './components/pie/donut-chart/donut-chart.component';
import { NoDataComponent } from './utils/no-data.component';
import { DonutAdvancedComponent } from './components/pie/donut-advanced/donut-advanced.component';
import { DonutGridComponent } from './components/pie/donut-grid/donut-grid.component';
import { BarVerticalComponent } from './components/bar/bar-vertical/bar-vertical.component';
import { BarHorizontalComponent } from './components/bar/bar-horizontal/bar-horizontal.component';
import { BarVerticalGroupedComponent } from './components/bar/bar-vertical-grouped/bar-vertical-grouped.component';
import { BarHorizontalGroupedComponent } from './components/bar/bar-horizontal-grouped/bar-horizontal-grouped.component';
import { BarHorizontalStackedComponent } from './components/bar/bar-horizontal-stacked/bar-horizontal-stacked.component';
import { BarVerticalStackedComponent } from './components/bar/bar-vertical-stacked/bar-vertical-stacked.component';
import { BarVerticalNormalizedComponent } from './components/bar/bar-vertical-normalized/bar-vertical-normalized.component';
import { BarHorizontalNormalizedComponent } from './components/bar/bar-horizontal-normalized/bar-horizontal-normalized.component';
import { LineComponent } from './components/line-area/line/line.component';
import { AreaComponent } from './components/line-area/area/area.component';
import { AreaStackedComponent } from './components/line-area/area-stacked/area-stacked.component';
import { AreaNormalizedComponent } from './components/line-area/area-normalized/area-normalized.component';
import { HeatComponent } from './components/map/heat/heat.component';
import { TreeComponent } from './components/map/tree/tree.component';
import { BarLineWrapperComponent } from './components/combo/bar-line/bar-line-wrapper.component';
import { BarLineComponent } from './components/combo/bar-line/bar-line.component';
import { BarSeriesComboComponent } from './components/combo/bar-line/bar-series.component';
import { BubbleComponent } from './components/scatter/bubble/bubble.component';
import { DirectedGraphComponent } from './components/directed-graph/directed-graph.component';

let PIECOMPONENTS = [PieChartComponent, DonutChartComponent, DonutAdvancedComponent, DonutGridComponent];
let BARCOMPONENTS = [BarVerticalComponent, BarHorizontalComponent, BarVerticalGroupedComponent, BarHorizontalGroupedComponent,
    BarHorizontalStackedComponent, BarVerticalStackedComponent, BarVerticalNormalizedComponent, BarHorizontalNormalizedComponent];
let LINEORAREACOMPONENTS = [LineComponent, AreaComponent, AreaStackedComponent, AreaNormalizedComponent];
let MAPCOMPONENTS = [HeatComponent, TreeComponent];
let COMBOCOMPONENT = [BarLineWrapperComponent, BarLineComponent, BarSeriesComboComponent];
let SCATTERCOMPONENT = [BubbleComponent];
let GRAPHCOMPONENT = [DirectedGraphComponent];
@NgModule({
    imports: [
        CommonModule,
        NgxChartsModule,
        NgxGraphModule
    ],
    declarations: [NeuChartsComponent, NoDataComponent,
        ...PIECOMPONENTS,
        ...BARCOMPONENTS,
        ...LINEORAREACOMPONENTS,
        ...MAPCOMPONENTS,
        ...COMBOCOMPONENT,
        ...SCATTERCOMPONENT,
        ...GRAPHCOMPONENT
    ],
    exports: [
        ...PIECOMPONENTS,
        ...BARCOMPONENTS,
        ...LINEORAREACOMPONENTS,
        ...MAPCOMPONENTS,
        ...COMBOCOMPONENT,
        ...SCATTERCOMPONENT,
        ...GRAPHCOMPONENT
    ]
})
export class NeuChartsModule { }
