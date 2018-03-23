import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'neu-charts-donut',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
    @Input('data') data: any[] = [];

    // options
    showLegend = true;
  
    colorScheme = colorSets.find(s => s.name == 'forest');
  
    // pie
    showLabels = true;
    explodeSlices = false;
    doughnut = true;
  constructor() { }

  ngOnInit() {
  }

}
