import { Component, OnInit, Input } from '@angular/core';
import { customColorSets } from '../../../utils/custom-color-sets';
import { BarGroupedOptions } from '../../../utils/models/bar-grouped-options';

@Component({
  selector: 'neu-charts-bar-vertical-grouped',
  templateUrl: './bar-vertical-grouped.component.html',
  styleUrls: ['./bar-vertical-grouped.component.scss']
})
export class BarVerticalGroupedComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarGroupedOptions;

    options: BarGroupedOptions = new BarGroupedOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

}
