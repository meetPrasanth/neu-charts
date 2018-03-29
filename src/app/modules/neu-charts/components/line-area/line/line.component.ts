import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        Object.assign(this.options, this.customOptions);
        if((this.data && (changes.data.previousValue != changes.data.currentValue)) || 
        (this.options.isXAxisDate && (changes.customOptions.previousValue != changes.customOptions.currentValue))) {
            this.data.forEach(element => {
                element.series.forEach(seriesData => {
                    seriesData.name = new Date(seriesData.name);
                });
            });
        }
    }
    
}
