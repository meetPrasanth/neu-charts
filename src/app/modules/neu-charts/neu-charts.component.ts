import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neu-charts',
  templateUrl: './neu-charts.component.html',
  styleUrls: ['./neu-charts.component.scss']
})
export class NeuChartsComponent implements OnInit {

    @Input('data') data: any[] = [];

    view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  constructor() { 
      console.log(this.data);
      
  }

  ngOnInit() {
      console.log(this.data);
      
  }

}
