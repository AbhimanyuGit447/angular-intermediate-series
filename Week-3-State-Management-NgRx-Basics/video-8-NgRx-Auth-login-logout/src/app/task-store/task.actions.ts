import { createAction, props } from "@ngrx/store";
import { Task } from "../models/task.model";

export const addTask = createAction(
    '[Tasks Page] Add Task',
    props<{task : Task}>()
)

export const removeTask = createAction(
    '[Tasks Page] Remove Task',
    props<{taskId : string}>()
)

export const toggleTaskCompletion = createAction(
    '[Tasks Page] toggle task Completion',
    props<{taskId : string}>()
)