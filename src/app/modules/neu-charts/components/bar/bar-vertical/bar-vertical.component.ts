import { Component, OnInit, Input } from '@angular/core';
import { customColorSets } from '../../../utils/custom-color-sets';
import { BarOptions } from '../../../utils/models/bar-options';

/**
 * Bar vertical chart
 * @author Prasanth Venkatesan
 */
@Component({
    selector: 'neu-charts-bar-vertical',
    templateUrl: './bar-vertical.component.html',
    styleUrls: ['./bar-vertical.component.scss']
})
export class BarVerticalComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarOptions;

    options: BarOptions = new BarOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

}
