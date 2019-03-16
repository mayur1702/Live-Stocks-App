import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockGridContainerComponent} from './components/stock-grid-container/stock-grid-container.component';

const routes: Routes = [
  {path:'home',component:StockGridContainerComponent},
  {path:'graphs',component:StockGridContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksGridRoutingModule { }
