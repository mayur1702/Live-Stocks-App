import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stock-history-container',
  templateUrl: './stock-history-container.component.html',
  styleUrls: ['./stock-history-container.component.scss']
})
export class StockHistoryContainerComponent implements OnInit {

  constructor(private elref:ElementRef) { }
  
  @ViewChild('tableDiv') theDiv:ElementRef;

  @Input() selectedTickerHistory;
  @Output() closeHistoryEvent:EventEmitter<boolean> = new EventEmitter();

  graphData={
    "chart": {      
      "yaxisname": "Price (in Dollars)",                                                  
      "numbersuffix": "$",
      "theme": "candy"
    }
  };
  width = 520;
  height = 400;
  type = 'msline';
  dataFormat = 'json';
  hideTable:boolean = true;
  toggleTableText:string = "Hide";
  hideGraph:boolean = true;
  toggleGraphText:string = "Hide"
  

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.graphData["chart"]["caption"] = this.selectedTickerHistory[0].toUpperCase() + ' History';
    this.graphView();
  }

  hideHistory(){
    this.closeHistoryEvent.emit(true);
  }

  graphView(){    
    let category = [];
    let data = [];
    this.selectedTickerHistory[1].map(
      x =>{
        category.push({"label" : x[1].toLocaleTimeString()});
        data.push({"value" : x[0]});
      }
    );    
    this.graphData["categories"] = [{"category":category}];
    this.graphData["dataset"]=[
      {
        "seriesname": this.selectedTickerHistory[0].toUpperCase(),
        "data": data
      }
    ];
  }

  toggleTableView(){
    this.hideTable = !this.hideTable;
    if(this.hideTable){
      this.toggleTableText = "Hide";
    }
    else{
      this.toggleTableText = "Show";
    }
  };

  toggleGraphView(){
    this.hideGraph = !this.hideGraph;
    if(this.hideGraph){
      this.toggleGraphText = "Hide";
    }
    else{
      this.toggleGraphText = "Show";
    }
  }

  ngAfterViewChecked(){
    this.width = this.theDiv.nativeElement.offsetHeight - 45;
    console.log(this.theDiv.nativeElement.offsetHeight)
  }
}
