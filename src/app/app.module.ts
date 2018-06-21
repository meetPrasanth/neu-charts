import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NeuChartsModule } from './modules/neu-charts/neu-charts.module';
// import { NeuMapsModule } from './modules/neu-maps/neu-maps.module';
import { NeuGraphModule } from './modules/neu-graph/neu-graph.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NeuChartsModule,
    // NeuMapsModule,
    NeuGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
