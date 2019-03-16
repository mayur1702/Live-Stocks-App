import { Component, OnInit } from '@angular/core';
import { StockSocketService } from '../../services/stock-socket.service';

@Component({
  selector: 'app-stock-grid-container',
  templateUrl: './stock-grid-container.component.html',
  styleUrls: ['./stock-grid-container.component.scss']
})
export class StockGridContainerComponent implements OnInit {

  constructor(private stocksData:StockSocketService) { }

  ngOnInit() {
    this.stocksData.getStocksData().subscribe(
      (val) => { this.receivedData(val)}
    )
  }

  receivedData(dataValue){
    dataValue.map(x=>{
      console.log(`${x[0]}: ${x[1]}`)
    });
  }


}
