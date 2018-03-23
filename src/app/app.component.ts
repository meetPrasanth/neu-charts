import { Component } from '@angular/core';
import { single, multi } from './constants/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  single: any[] = [];
  multi: any[] = [];

  constructor() {
      this.single = single;
      this.multi = multi;
      console.log(this.single);
  }

}
