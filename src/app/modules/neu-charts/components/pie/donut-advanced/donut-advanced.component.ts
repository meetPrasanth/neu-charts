import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { customColorSets } from '../../../utils/custom-color-sets';

/**
 * Advanced donut component
 * @author Prasanth Venkatesan
 */
@Component({
  selector: 'neu-charts-donut-advanced',
  templateUrl: './donut-advanced.component.html',
  styleUrls: ['./donut-advanced.component.scss']
})
export class DonutAdvancedComponent implements OnInit {

    @Input('data') data: any[] = [];

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() { }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
