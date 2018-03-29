import { Component, OnInit, Input } from '@angular/core';
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
