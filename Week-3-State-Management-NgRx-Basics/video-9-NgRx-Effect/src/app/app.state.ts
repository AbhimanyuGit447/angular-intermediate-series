import { AuthState } from "./auth/auth.model";
import { taskState } from "./task-store/task.state";

export interface AppState {
    tasks : taskState;
    auth : AuthState
}