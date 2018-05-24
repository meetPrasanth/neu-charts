import { Component } from '@angular/core';
import { single, multi, reference, comboLine, dataBubble, dataBubble2 } from './constants/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  single: any[] = [];
  multi: any[] = [];
  reference: any[] = [];
  comboLine = [];
  dataBubble = [];
  dataBubble2 = [];

  options = {
    showLegend: true
  }

  donutOptions = {
      arcWidth: 0.3
  }

  lineOptions = {
      timeline: true,
      isXAxisDate: true,
      referenceLines: reference
  }

  mapOptions = {
    innerPadding: 5,
    showSkew : true,
    colorScheme: ['#396387', '#204566']
  }

  constructor() {
      Object.assign(this, { single, multi, comboLine, dataBubble, dataBubble2 });
      console.log(this.single);
  }

  mPartClicked(event) {
      console.log("clicked", event);
  }

}
