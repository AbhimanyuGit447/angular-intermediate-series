import { createFeatureSelector, createSelector } from "@ngrx/store"
import { taskState } from "./task.state"
import { Task } from "../models/task.model";

export const selectTasksState = createFeatureSelector<taskState>('tasks');

export const selectAllTasks = createSelector(
    selectTasksState,
    (state : taskState) => state.tasks /// tasks array
)


export const selectIcompleteTasksCount = createSelector(
    selectAllTasks,
    tasks => tasks.filter(t => !t.completed).length
);
