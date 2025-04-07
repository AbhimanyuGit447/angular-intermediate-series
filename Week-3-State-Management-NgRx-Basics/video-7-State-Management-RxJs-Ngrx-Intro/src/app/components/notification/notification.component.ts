import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notification : Notification | null = null;

  constructor(private notifyService : NotificationService){

  }
  ngOnDestroy(): void {
    this.notifyService.clearNotification();
  }

  ngOnInit(): void {
    this.notifyService.notification$.subscribe(notification => {
      this.notification = notification;
    })
  }

  dismiss(){
    this.notifyService.clearNotification();
  }


}
