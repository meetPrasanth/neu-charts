import { Component, OnInit, Input } from '@angular/core';
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

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

}
