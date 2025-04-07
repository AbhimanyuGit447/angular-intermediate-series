import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title : string = 'Confirm Action';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  isOpen = false;


  open(){
    this.isOpen = true;
  }

  close(){
    this.isOpen = false;
  }

  onConfirmClick(){
    this.confirm.emit();
    this.close();
  }

  onCancelClick(){
    this.cancel.emit();
    this.close();
  }

}
