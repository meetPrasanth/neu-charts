import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'neu-charts-pie',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    
    @Input('data') data: any[] = [];

  // options
  showLegend = true;

  colorScheme = colorSets.find(s => s.name == 'forest');

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  constructor() { }

  ngOnInit() {
  }

}
