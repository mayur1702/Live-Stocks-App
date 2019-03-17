import { Component, OnInit } from '@angular/core';
import { StockSocketService } from '../../services/stock-socket.service';
import * as moment from 'moment';

@Component({
  selector: 'app-stock-grid-container',
  templateUrl: './stock-grid-container.component.html',
  styleUrls: ['./stock-grid-container.component.scss']
})
export class StockGridContainerComponent implements OnInit {

  constructor(private stocksData:StockSocketService) { }

  stockData={};
  stockKeys=[];
  stockHistoryData={};
  showTable:boolean=true;
  selectedTicker;

  ngOnInit() {
    // console.log(moment().fromNow());
    this.stocksData.getStocksData().subscribe(
      (val) => { this.receivedData(val)}
    )
  }

  receivedData(dataValue){
    dataValue.map(x=>{
      // console.log(`${x[0]}: ${x[1]}`);

      let colorStatus;
      let difference;
      if(this.stockKeys.indexOf(x[0])!=-1){
        if(this.stockData[x[0]][0] < x[1]){
          colorStatus = true;
        }
        else{
          colorStatus = false;
        }
        difference = Number((((-this.stockData[x[0]][0] + x[1])/this.stockData[x[0]][0])*100).toFixed(2));
        this.stockHistoryData[x[0]].push([Number((x[1]).toFixed(2)),new Date(),difference]);
      }
      else{
        this.stockKeys.push(x[0]);
        this.stockHistoryData[x[0]] = [[Number((x[1]).toFixed(2)),new Date()]];
      }
      this.stockData[x[0]] = [Number((x[1]).toFixed(2)),colorStatus,new Date(),difference,];
    });
  }

  getHistory(ticker){
    this.selectedTicker = [ticker,this.stockHistoryData[ticker]];
    this.showTable = false;
  }

  closeHistory(value){
    this.showTable = value;
  }


}
