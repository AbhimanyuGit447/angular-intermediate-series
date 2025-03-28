import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { TextQuestionComponent } from '../components/text-question/text-question.component';
import { MultipleChoiceComponent } from '../components/multiple-choice/multiple-choice.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { DropdownQuestionComponent } from '../components/dropdown-question/dropdown-question.component';

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  private containerRef! : ViewContainerRef;

  setContainer(viewContainerRef : ViewContainerRef){
    this.containerRef = viewContainerRef;
  }

  loadQuestion( type : 'text' | 'multiple' | 'dropdown', question : string, options : string[] = [] ){
    this.containerRef.clear();
    let componentRef : ComponentRef<any>;

    if(type === 'text'){
      componentRef = this.containerRef.createComponent(TextQuestionComponent);
    }else if(type === 'multiple'){
      componentRef = this.containerRef.createComponent(MultipleChoiceComponent);
    }else{
      componentRef = this.containerRef.createComponent(DropdownQuestionComponent);
    }

    componentRef.instance.question = question;

    if(options.length){
      componentRef.instance.options = options;
    }

  }

  constructor() { }
}
