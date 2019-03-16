import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksGridRoutingModule } from './stocks-grid-routing.module';
import { StockGridContainerComponent } from './components/stock-grid-container/stock-grid-container.component';

@NgModule({
  declarations: [StockGridContainerComponent],
  imports: [
    CommonModule,
    StocksGridRoutingModule
  ],
  exports:[StockGridContainerComponent]
})
export class StocksGridModule { }
