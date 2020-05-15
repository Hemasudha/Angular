import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private message = new BehaviorSubject({});
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: any) {
    this.message.next(message);
  }

}
