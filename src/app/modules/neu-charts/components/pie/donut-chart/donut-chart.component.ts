import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { DonutOptions } from '../../../utils/models/donut-options';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Donut chart component
 * @author Prasanth Venkatesan
 */
@Component({
    selector: 'neu-charts-donut',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

    @Input('data') data: any[] = [];
    @Input('options') cutomOptions: DonutOptions;

    options: DonutOptions = new DonutOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {   
        Object.assign(this.options, this.cutomOptions);
    }

}
