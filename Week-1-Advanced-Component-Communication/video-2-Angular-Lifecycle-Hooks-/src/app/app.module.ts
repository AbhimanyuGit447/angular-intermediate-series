import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SiblingComponent } from './components/sibling/sibling.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ModalComponent } from './shared/modal/modal.component';
import { TaskComponent } from './components/task/task.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
