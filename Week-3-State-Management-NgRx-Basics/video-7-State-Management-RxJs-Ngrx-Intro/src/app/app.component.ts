import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { SurveyServiceService } from './services/survey-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'advanced-component-demo';

  @ViewChild('surveyContainer', {read : ViewContainerRef}) container! : ViewContainerRef;

  constructor(private surveyService : SurveyServiceService) { }

  ngAfterViewInit(): void {
    this.surveyService.setContainer(this.container);
  }
  
  loadTextQuestion() {
    this.surveyService.loadQuestion('text', 'What is your favourite color?')
  }

  loadMultipleChoice() {
    this.surveyService.loadQuestion('multiple', 'which languagues do you speak?', ['english', 'spanish']);
  }

  loadDropdown() {
    this.surveyService.loadQuestion('dropdown', 'select your country', ['England', 'Spain', 'USA']);
  }
  

}


