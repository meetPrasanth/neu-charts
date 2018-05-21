import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    options: DonutOptions = new DonutOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {   
        Object.assign(this.options, this.cutomOptions);
    }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
