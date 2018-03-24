import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { PieOptions } from '../../../utils/models/pie-options';

@Component({
  selector: 'neu-charts-pie',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    
    @Input('data') data: any[] = [];
    @Input('options') customOptions : PieOptions;

    options: PieOptions = new PieOptions();
    
  colorScheme = colorSets.find(s => s.name == 'forest');

  constructor() { 
      console.log("cons",this.options, this.customOptions);
      
  }

  ngOnInit() {
      
    console.log("init",this.options, this.customOptions);
    Object.assign(this.options, this.customOptions);
    console.log("aft",this.options, this.customOptions);
  }

}
