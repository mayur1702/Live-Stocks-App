import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksGridModule } from './modules/stocks-grid/stocks-grid.module';

const routes: Routes = [
  {path : '', loadChildren:"./modules/stocks-grid/stocks-grid.module#StocksGridModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
