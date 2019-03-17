import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockSocketService {

  ws: WebSocket;

  constructor() {}

  getStocksData(): Observable<any[]>{
    this.ws = new WebSocket( environment.liveStocksURL );
    return new Observable<any[]>(
      observer =>{
        this.ws.onmessage = (event) => { 
          observer.next(JSON.parse(event.data))
        }
      }
    )
  }
}
