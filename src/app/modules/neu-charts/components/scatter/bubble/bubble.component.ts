import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BubbleOptions } from '../../../utils/models/bubble-options';
import { customColorSets } from '../../../utils/custom-color-sets';

@Component({
    selector: 'neu-charts-bubble',
    templateUrl: './bubble.component.html',
    styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

    @Input('data') data: any[] = [];
    @Input('options') customOptions: BubbleOptions;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    options: BubbleOptions = new BubbleOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
