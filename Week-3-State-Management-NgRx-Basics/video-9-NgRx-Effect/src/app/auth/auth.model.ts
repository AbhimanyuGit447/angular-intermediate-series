export interface AuthState {
    isAuthenticated : boolean;
    username : string | null;
}

export const initialAuthState  : AuthState = {
    isAuthenticated : false,
    username  : null
}