import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NeuChartsModule } from './modules/neu-charts/neu-charts.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NeuChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
