import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { customColorSets } from '../../../utils/custom-color-sets';

@Component({
    selector: 'neu-charts-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

    @Input('data') data: any;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {}

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

}
