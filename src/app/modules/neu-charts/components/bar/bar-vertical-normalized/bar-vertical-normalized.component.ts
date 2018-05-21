import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BarOptions } from '../../../utils/models/bar-options';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Bar vertical normalized chart
 * @author Prasanth Venkatesan
 */
@Component({
  selector: 'neu-charts-bar-vertical-normalized',
  templateUrl: './bar-vertical-normalized.component.html',
  styleUrls: ['./bar-vertical-normalized.component.scss']
})
export class BarVerticalNormalizedComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarOptions;
    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    options: BarOptions = new BarOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
