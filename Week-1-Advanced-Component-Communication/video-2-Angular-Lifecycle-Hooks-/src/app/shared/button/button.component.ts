import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label : string = 'click me'
  @Input() type : 'primary' | 'danger' = 'primary';
  @Input() disabled : boolean = false;

  @Output() action = new EventEmitter<void>();
}
