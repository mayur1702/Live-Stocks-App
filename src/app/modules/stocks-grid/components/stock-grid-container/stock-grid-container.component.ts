import { Component, OnInit } from '@angular/core';
import { StockSocketService } from '../../services/stock-socket.service';

@Component({
  selector: 'app-stock-grid-container',
  templateUrl: './stock-grid-container.component.html',
  styleUrls: ['./stock-grid-container.component.scss']
})
export class StockGridContainerComponent implements OnInit {

  constructor(private stocksData:StockSocketService) { }

  data={};
  keys=[];

  ngOnInit() {
    this.stocksData.getStocksData().subscribe(
      (val) => { this.receivedData(val)}
    )
  }

  receivedData(dataValue){
    dataValue.map(x=>{
      console.log(`${x[0]}: ${x[1]}`)
      let temp;
      if(this.keys.indexOf(x[0])!=-1){
        if(this.data[x[0]][0] < x[1]){
          temp = true;
        }
        else{
          temp = false;
        }
      }
      else{
        this.keys.push(x[0])
      }
      this.data[x[0]] = [Number((x[1]).toFixed(2)),temp,new Date()];
    });
  }



}
