import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})



export class ParentComponent {

  sharedMessage : string = '';
  private subscription! : Subscription;

  constructor(private dataService : DataService,  private notificationService : NotificationService){
    this.subscription = this.dataService.currentMessage.subscribe(data => {
      this.sharedMessage = data;
    })
  }

  parentMessage = 'hello from Parent'

  childReply = '';

  @ViewChild(ChildComponent) childComponent! : ChildComponent;

  notifySucess(){
    this.notificationService.showNotification('Task Completed SucessFully', 'success')
  }

  notifyError(){
    this.notificationService.showNotification('Something went wrong', 'error');

  }


  handleReply(message : string){
    this.childReply = message;
  }

  updateChildDirectly(){
    if(this.childComponent){
      this.childComponent.message = 'Updated directly using viewchild'
    }
  }
}
