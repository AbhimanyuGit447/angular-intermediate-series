import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export interface Notification {
  message : string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration? : number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showNotification(message : string, type: 'success' | 'error' | 'warning' | 'info', duration = 3000){
    this.notificationSubject.next({message, type, duration});

    setTimeout(() => {
      this.clearNotification();
    }, duration);
  }

  clearNotification(){
    this.notificationSubject.next(null);
  }
}
