import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-history-container',
  templateUrl: './stock-history-container.component.html',
  styleUrls: ['./stock-history-container.component.scss']
})
export class StockHistoryContainerComponent implements OnInit {

  constructor() { }

  @Input() selectedTickerHistory;
  @Output() closeHistoryEvent:EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.selectedTickerHistory);
  }

  hideHistory(){
    this.closeHistoryEvent.emit(true);
  }

}
