import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BarGroupedOptions } from '../../../utils/models/bar-grouped-options';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Bar horizontal grouped chart
 * @author Prasanth Venkatesan
 */
@Component({
  selector: 'neu-charts-bar-horizontal-grouped',
  templateUrl: './bar-horizontal-grouped.component.html',
  styleUrls: ['./bar-horizontal-grouped.component.scss']
})
export class BarHorizontalGroupedComponent implements OnInit {

    @Input('data') data: any;
    @Input('options') customOptions: BarGroupedOptions;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

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
