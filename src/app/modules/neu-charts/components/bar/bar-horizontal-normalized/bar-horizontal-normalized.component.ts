import { Component, OnInit, Input } from '@angular/core';
import { BarOptions } from '../../../utils/models/bar-options';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Bar horizontal normalized chart 
 * @author Prasanth Venkatesan
 */
@Component({
  selector: 'neu-charts-bar-horizontal-normalized',
  templateUrl: './bar-horizontal-normalized.component.html',
  styleUrls: ['./bar-horizontal-normalized.component.scss']
})
export class BarHorizontalNormalizedComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarOptions;

    options: BarOptions = new BarOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

}
