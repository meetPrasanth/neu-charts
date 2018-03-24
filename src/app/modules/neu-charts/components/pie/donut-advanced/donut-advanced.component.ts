import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';

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

    colorScheme = colorSets.find(s => s.name == 'forest');

    constructor() {}

    ngOnInit() {}

}
