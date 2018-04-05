import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService, Message } from './message.service';
// import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators/map';


export interface Item {
  username: string;
  content: string;
  type?: string;
  timestamp?: Date;
}

@Injectable()
export class ItemService {

  constructor(private http: HttpClient, private messageService: MessageService, private auth: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`
    })
  };


  public addItem(item: Item): Observable<any> {

    const base = this.http.post('/api/additem', item, this.httpOptions);
    const request = base.pipe(map((data: any) => {
      this.messageService.broadcast(data);
      return data;
    }));

    return request;
  }

  public getItem(itemId: string): Observable<any> {

    const base = this.http.get('/api/item?id=' + itemId, this.httpOptions);
    const request = base.pipe(map((data: any) => {
      this.messageService.broadcast(data);
      return data;
    }));

    return request;
  }

  public searchItems(query: any): Observable<any> {

    const base = this.http.post('/api/search', query, this.httpOptions);
    const request = base.pipe(map((data: any) => {
      console.log("search item data: ", data);
      this.messageService.broadcast(data);
      return data;
    }));

    return request;
  }
}
