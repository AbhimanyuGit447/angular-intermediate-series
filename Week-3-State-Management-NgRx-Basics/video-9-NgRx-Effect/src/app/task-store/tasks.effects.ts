import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadTask, loadTasksFailure, loadTaskSuccess } from "./task.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Task } from "../models/task.model";


interface JSONDATA {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

@Injectable()
export class TasksEffects {

    loadTask$ = createEffect(() => this.actions$.pipe(
        // loadTasks
        ofType(loadTask),
        switchMap(() => {
            //JSON 
            return this.http.get<JSONDATA[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .pipe(
                map(backendData => {
                    const tasks : Task[] = backendData.map(todo => ({
                        id : todo.id.toString(),
                        description : todo.title,
                        completed : todo.completed
                    }));

                    return loadTaskSuccess({tasks : tasks})
                    
                }),
                //http fails
                catchError(error => {
                    return  of(loadTasksFailure({error : error}));
                })
                // http successs
                // failure
            );
        })
    ));
    
    constructor(private http : HttpClient, private actions$ : Actions){

    }
}