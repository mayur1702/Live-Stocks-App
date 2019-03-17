import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stock-history-container',
  templateUrl: './stock-history-container.component.html',
  styleUrls: ['./stock-history-container.component.scss']
})
export class StockHistoryContainerComponent implements OnInit {

  constructor(private elref:ElementRef) { }
  
  @ViewChild('tableDiv') theDiv: ElementRef;

  @Input() selectedTickerHistory;
  @Output() closeHistoryEvent: EventEmitter<boolean> = new EventEmitter();

  graphData={
    "chart": {      
      "yaxisname": "Price (in Dollars)",                                                  
      "numbersuffix": "$",
      "theme": "candy"
    }
  };

  graphWidth = 520 ;
  graphHeight: number = 400;
  graphType: string = 'msline';
  dataFormat: string = 'json';
  hideTable: boolean = false;
  toggleTableText: string = "Show";
  hideGraph: boolean = true;
  toggleGraphText: string = "Hide";
  

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
      stockValue =>{
        category.push({"label" : stockValue[1].toLocaleTimeString()});
        data.push({"value" : stockValue[0]});
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
    // this.graphWidth = this.theDiv.nativeElement.offsetHeight - 45;
  }
}
