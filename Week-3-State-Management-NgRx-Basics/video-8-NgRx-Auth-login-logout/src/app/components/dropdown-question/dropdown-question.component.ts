import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.scss']
})
export class DropdownQuestionComponent {
  @Input() question : string = '';
  @Input() options : string[] = [];
  selctedOption : string = '';
}
