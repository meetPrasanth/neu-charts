import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { PieOptions } from '../../../utils/models/pie-options';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Pie chart component
 * @author Prasanth Venkatesan
 */
@Component({
    selector: 'neu-charts-pie',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    @Input('data') data: any[] = [];
    @Input('options') customOptions: PieOptions;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    options: PieOptions = new PieOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
