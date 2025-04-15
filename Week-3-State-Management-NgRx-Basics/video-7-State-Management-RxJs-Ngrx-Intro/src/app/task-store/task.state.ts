import { Task } from "../models/task.model";

export interface taskState {
    tasks : Task[];
}

export const initialState : taskState = {
    tasks : []
}