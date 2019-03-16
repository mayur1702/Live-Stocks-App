import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksGridRoutingModule } from './stocks-grid-routing.module';
import { StockGridContainerComponent } from './components/stock-grid-container/stock-grid-container.component';


import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';

FusionChartsModule.fcRoot(FusionCharts, Charts, TimeSeries);

@NgModule({
  declarations: [StockGridContainerComponent],
  imports: [
    CommonModule,
    StocksGridRoutingModule,
    FusionChartsModule
  ],
  exports:[StockGridContainerComponent]
})
export class StocksGridModule { }
