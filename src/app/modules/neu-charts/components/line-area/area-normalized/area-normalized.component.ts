import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { LineOptions } from '../../../utils/models/line-options';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Area normalized chart component
 * @author Prasanth Venkatesan
 */
@Component({
  selector: 'neu-charts-area-normalized',
  templateUrl: './area-normalized.component.html',
  styleUrls: ['./area-normalized.component.scss']
})
export class AreaNormalizedComponent implements OnInit {

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
