import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  
  messages: string[] = [];

  //push appends values to array.
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  
}