import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neu-charts-pie',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    
    @Input('data') data: any[] = [];

  // options
  showLegend = true;

  colorScheme = {
    domain: [
        '#9896F8', '#81DD98', '#76B3F9', '#05668D', '#2E2E2E', '#FDBD2D', '#FC8A25', '#FA4F1E', '#FA141B', '#BA38D1'
      ]
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  constructor() { }

  ngOnInit() {
  }

}
