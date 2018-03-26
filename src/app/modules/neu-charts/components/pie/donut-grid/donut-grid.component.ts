import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { customColorSets } from '../../../utils/custom-color-sets';

@Component({
    selector: 'neu-charts-donut-grid',
    templateUrl: './donut-grid.component.html',
    styleUrls: ['./donut-grid.component.scss']
})
export class DonutGridComponent implements OnInit {

    @Input('data') data: any[] = [];

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() { }

}
