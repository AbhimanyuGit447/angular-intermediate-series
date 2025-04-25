import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent {
  @Input() question : string = '';
  answer : string = '';
}
