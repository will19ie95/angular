import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


export interface Message {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
  key?: string;
}

@Injectable()
export class MessageService {

  constructor() { }
  private messageSource = new Subject<Message | Message[]>();
  private messageObserver = this.messageSource.asObservable();

  add(message: Message) {
    if (message) {
      this.messageSource.next(message);
    }
  }

  clear() {
    this.messageSource.next();
  }

  getObserver(): Observable<any> {
    return this.messageObserver;
  }

  // creates a message to be added, used to show ui for backend response
  broadcast(data: any) {

    const message = {
      severity: "",
      summary: "",
    };

    if (data.status === "OK") {
      message.severity = "success";
      message.summary = data.message;
    } else if (data.status === "error") {
      message.severity = "error";
      message.summary = data.error;
    }

    this.add(message);

  }

}
