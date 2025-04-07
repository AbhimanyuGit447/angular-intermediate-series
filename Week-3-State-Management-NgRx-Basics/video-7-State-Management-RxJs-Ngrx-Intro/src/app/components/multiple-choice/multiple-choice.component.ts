import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent {
  @Input() question : string = '';
  @Input() options : string[] = [];
  selectedAnswer : string = '';
}
