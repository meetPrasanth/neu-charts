import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MapOptions } from '../../../utils/models/map-options';
import { customColorSets } from '../../../utils/custom-color-sets';

@Component({
    selector: 'neu-charts-heat',
    templateUrl: './heat.component.html',
    styleUrls: ['./heat.component.scss']
})
export class HeatComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: MapOptions;

    options: MapOptions = new MapOptions();

    colorScheme: any;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        Object.assign(this.options, this.customOptions);

        if(this.options.colorScheme != null) {
            this.colorScheme = {};
            this.colorScheme['domain'] = this.options.colorScheme;
        } else {
            this.colorScheme = customColorSets.find(s => s.name == 'palatte');
        }
        if (this.options.showSkew && (changes.customOptions.previousValue != changes.customOptions.currentValue)) {
            this.data.sort((current, next) => {
                if (current.series.length > next.series.length) {
                    return -1;
                } else if (current.series.length < next.series.length) {
                    return 1;
                }
                return 0;
            });
        }
    }

}
