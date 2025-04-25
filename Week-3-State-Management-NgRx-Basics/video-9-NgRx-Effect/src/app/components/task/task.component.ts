import { Component, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {


  @ViewChild('deleteModal') deleteModal! : ModalComponent;


  constructor(private notificationService : NotificationService){

  }

  openDeleteModal(){
    this.deleteModal.open();
  }

  onConfirmDelete(){
    this.deleteModal.close();
    this.notificationService.showNotification('Task deleted Successfully', 'success')

  }

  onCancelDelete(){
    this.deleteModal.close();
  }
}
