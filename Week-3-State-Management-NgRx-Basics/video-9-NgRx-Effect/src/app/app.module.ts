import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SiblingComponent } from './components/sibling/sibling.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ModalComponent } from './shared/modal/modal.component';
import { TaskComponent } from './components/task/task.component';
import { TextQuestionComponent } from './components/text-question/text-question.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { DropdownQuestionComponent } from './components/dropdown-question/dropdown-question.component';
import { SignupComponent } from './components/signup/signup.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { taskReducer } from './task-store/task.reducer';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import {HttpClientModule} from "@angular/common/http"
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './task-store/tasks.effects';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    NotificationComponent,
    CardComponent,
    ButtonComponent,
    DropdownComponent,
    ModalComponent,
    TaskComponent,
    TextQuestionComponent,
    MultipleChoiceComponent,
    DropdownQuestionComponent,
    SignupComponent,
    DynamicFormComponent,
    RegistrationFormComponent,
 
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([TasksEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
