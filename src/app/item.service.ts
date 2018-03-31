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

  public addItem(item: Item): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };

    const base = this.http.post('/api/additem', item, httpOptions);
    const request = base.pipe(map((data: any) => {

      const message = {
        severity: "",
        summary: "",
      };

      if (data.status === "OK") {
        message.severity = "success";
        message.summary = data.message;
      } else if (data.status === "error") {
        message.severity = "error";
        message.summary = data.message;
      }
      this.messageService.add(message);

      return data;
    }));

    return request;
  }

  public getItem(itemId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };

    const base = this.http.get('/api/item?id=' + itemId, httpOptions);
    const request = base.pipe(map((data) => {
      // console.log("Get Item Data", data);
      return data;
    }));

    return request;
  }
}
