import { Task } from "../models/task.model";

export interface taskState {
    tasks : Task[];
    loading  : boolean;
    error : any
}

export const initialState : taskState = {
    tasks : [],
    loading  : false,
    error : null
}