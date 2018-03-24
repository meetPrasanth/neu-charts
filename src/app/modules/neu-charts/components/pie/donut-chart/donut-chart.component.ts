import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { DonutOptions } from '../../../utils/models/donut-options';

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

    colorScheme = colorSets.find(s => s.name == 'forest');

    constructor() { }

    ngOnInit() {   
        Object.assign(this.options, this.cutomOptions);
    }

}
