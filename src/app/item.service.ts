import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

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
    return this.http.post('/api/additem', item, httpOptions);
  }

}
