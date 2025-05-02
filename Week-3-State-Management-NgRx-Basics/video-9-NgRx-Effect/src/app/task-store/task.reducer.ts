import { createReducer, on } from "@ngrx/store";
import { initialState } from "./task.state";
import { addTask, loadTask, loadTasksFailure, loadTaskSuccess, removeTask, toggleTaskCompletion } from "./task.actions";

export const taskReducer = createReducer(
    initialState,

    on(addTask, (state, {task}) => {
        //
        return {
            ...state,
            tasks : [...state.tasks, task]
        }
    }),

    on(removeTask, (state, {taskId}) => {
        return {
            ...state,
            tasks : state.tasks.filter(task => task.id !== taskId)
        };
    }),

    on(toggleTaskCompletion, (state, {taskId}) => {
        return {
            ...state,
            tasks : state.tasks.map(task => 
                task.id === taskId ? {...task, completed : !task.completed} : task
            ),
        };
    }),

    on(loadTask, (state) => ({
        ...state,
        loading : true,
        error : null
    })),

    on(loadTaskSuccess, (state, {tasks}) => ({
        ...state,
        tasks : tasks,
        loading : false,
        error : null
    })),

    on(loadTasksFailure, (state, {error}) => ({
        ...state,
        loading : false,
        error : error
    }))
    


   

    // 
)