import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { customColorSets } from '../../../utils/custom-color-sets';
import { BarGroupedOptions } from '../../../utils/models/bar-grouped-options';

/**
 * Bar vertical grouped chart
 * @author Prasanth Venkatesan
 */
@Component({
  selector: 'neu-charts-bar-vertical-grouped',
  templateUrl: './bar-vertical-grouped.component.html',
  styleUrls: ['./bar-vertical-grouped.component.scss']
})
export class BarVerticalGroupedComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarGroupedOptions;
    @Output() onSelect : EventEmitter<any> = new EventEmitter<any>();

    options: BarGroupedOptions = new BarGroupedOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
