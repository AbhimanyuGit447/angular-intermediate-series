import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notification : Notification | null = null;

  constructor(private notifyService : NotificationService){

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
