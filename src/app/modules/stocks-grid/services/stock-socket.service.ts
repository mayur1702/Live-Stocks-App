import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockSocketService {

  ws : WebSocket;

  constructor() {}

  getStocksData():Observable<any[]>{
    this.ws = new WebSocket('ws://stocks.mnet.website');
    return new Observable<any[]>(
      observer =>{
        this.ws.onmessage = (event) => { 
          observer.next(JSON.parse(event.data))
        }
      }
    )
  }
}
