import { Component, OnInit, Input } from '@angular/core';
import * as shape from 'd3-shape';
import { customColorSets } from '../../../neu-charts/utils/custom-color-sets';
import { DirectedGraph } from '../../utils/models/directed-graph';

@Component({
    selector: 'neu-directed-graph',
    templateUrl: './directed-graph.component.html',
    styleUrls: ['./directed-graph.component.scss']
})
export class DirectedGraphComponent implements OnInit {

    @Input() data: any;
    @Input('options') customOptions: DirectedGraph;
    
    options: DirectedGraph = new DirectedGraph;
    curve = shape.curveBundle;
    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        Object.assign(this.options, this.customOptions);
    }

    mOnSelect(event) {
        console.log('clicked', event);
    }

}
