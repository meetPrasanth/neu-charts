import { Component } from '@angular/core';
import { single, multi } from './constants/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  single: any[] = [];
  multi: any[] = [];

  options = {
    showLegend: true
  }

  donutOptions = {
      arcWidth: 0.3
  }

  lineOptions = {
      timeline: true,
      isXAxisDate: true
  }

  mapOptions = {
    innerPadding: 5,
    showSkew : true
  }

  constructor() {
      Object.assign(this, { single, multi });
      console.log(this.single);
  }

}
