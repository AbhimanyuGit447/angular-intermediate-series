import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { SurveyServiceService } from './services/survey-service.service';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import { Store } from '@ngrx/store';
import { selectAllTasks, selectIcompleteTasksCount } from './task-store/task.selectors';
import { addTask, removeTask, toggleTaskCompletion } from './task-store/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newTaskDescription = '';
  
  allTasks$ : Observable<Task[]>;
  incompleteTasksCount$ : Observable<number>;

  constructor(private store : Store){
    this.allTasks$ = this.store.select(selectAllTasks);
    this.incompleteTasksCount$ = this.store.select(selectIcompleteTasksCount);
  }

  addTask(){
    const newTask : Task = {
      id : Date.now().toString(),
      description : this.newTaskDescription,
      completed : false
    }
    this.store.dispatch(addTask({task : newTask}));
    this.newTaskDescription = '';
  }

  removeTask(taskId : string){
    this.store.dispatch(removeTask({taskId}));
  }

  toggleCompletion(taskId : string){
    this.store.dispatch(toggleTaskCompletion({taskId}))
  }

}


