import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() message? : string = '';
  @Output() replyEvent = new EventEmitter<string>();

  reply : string = '';

  sendReply(){
    this.replyEvent.emit(this.reply);
    this.reply  = '';
  }
}
