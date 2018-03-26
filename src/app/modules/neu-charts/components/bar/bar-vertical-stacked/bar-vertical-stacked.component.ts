import { Component, OnInit, Input } from '@angular/core';
import { BarOptions } from '../../../utils/models/bar-options';
import { customColorSets } from '../../../utils/custom-color-sets';

@Component({
  selector: 'neu-charts-bar-vertical-stacked',
  templateUrl: './bar-vertical-stacked.component.html',
  styleUrls: ['./bar-vertical-stacked.component.scss']
})
export class BarVerticalStackedComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarOptions;

    options: BarOptions = new BarOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

}
