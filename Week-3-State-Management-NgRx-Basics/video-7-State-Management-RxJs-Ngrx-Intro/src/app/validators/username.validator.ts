import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { AuthServiceService } from "../services/auth.service.service";
import { debounce, debounceTime, map, Observable, of, switchMap } from "rxjs";

export function usernameValidator(authService : AuthServiceService) : AsyncValidatorFn{
    return (control : AbstractControl) : Observable<{userNameTaken : boolean} | null> => {
        if(!control.value) return of(null);

        return of(control.value).pipe(
            debounceTime(500),
            switchMap(username => authService.checkUsername(username)),
            map(isTaken => (isTaken ? {userNameTaken : true} : null))
        );
    };
}