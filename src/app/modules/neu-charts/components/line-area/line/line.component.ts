import { Component, OnInit, Input } from '@angular/core';
import { customColorSets } from '../../../utils/custom-color-sets';
import { LineOptions } from '../../../utils/models/line-options';

@Component({
    selector: 'neu-charts-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: LineOptions;

    options: LineOptions = new LineOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
        if(this.options.isXAxisDate) {
            this.data.forEach(element => {
                element.series.forEach(seriesData => {
                    seriesData.name = new Date(seriesData.name);
                });
            });
        }
    }

}
