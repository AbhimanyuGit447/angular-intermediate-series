import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { SurveyServiceService } from './services/survey-service.service';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import { Store } from '@ngrx/store';
import { selectAllTasks, selectIcompleteTasksCount, selectTaskError, selectTasksLoading } from './task-store/task.selectors';
import { addTask, loadTask, removeTask, toggleTaskCompletion } from './task-store/task.actions';
import { AppState } from './app.state';
import { selectIsAuthenticated, selectUsername } from './auth/auth.selectors';
import { login, logout } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newTaskDescription = '';
  
  allTasks$! : Observable<Task[]>;
  incompleteTasksCount$! : Observable<number>;
  tasksLoading$! : Observable<boolean>;
  tasksErrors$! : Observable<any>;

  isAuthenticated$!  : Observable<boolean>;
  username$! : Observable<string | null>;
  

  constructor(private store : Store<AppState>){
  
  }

  ngOnInit(): void {
    this.allTasks$ = this.store.select(selectAllTasks);
    this.incompleteTasksCount$ = this.store.select(selectIcompleteTasksCount);

    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.username$ = this.store.select(selectUsername);

    this.tasksLoading$ = this.store.select(selectTasksLoading);
    this.tasksErrors$ = this.store.select(selectTaskError);

    this.store.dispatch(loadTask());
  }


  loginUser(){
    const name = prompt("Enter your username : ")
    if(name){
      this.store.dispatch(login({username : name.trim()}));
    }
  }

  logoutUser(){
    this.store.dispatch(logout());
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


