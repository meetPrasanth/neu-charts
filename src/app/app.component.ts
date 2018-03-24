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
    showLegend: false
  }

  donutOptions = {
      arcWidth: 0.3
  }

  constructor() {
      Object.assign(this, { single });
      console.log(this.single);
  }

}
