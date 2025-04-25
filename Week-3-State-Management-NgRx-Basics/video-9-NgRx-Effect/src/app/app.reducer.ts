import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { taskReducer } from "./task-store/task.reducer";
import { authReducer } from "./auth/auth.reducer";

export const appReducer  : ActionReducerMap<AppState> = {
    tasks : taskReducer,
    auth : authReducer
}