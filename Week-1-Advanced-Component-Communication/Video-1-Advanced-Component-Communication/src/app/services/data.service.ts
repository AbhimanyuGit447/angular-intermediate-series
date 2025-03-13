import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>('initial message')

  currentMessage : Observable<string> = this.messageSource.asObservable();

  //method to update our message

  updateMessage(message : string){
    this.messageSource.next(message);
  }
}
