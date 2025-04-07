import { AbstractControl } from "@angular/forms";
import { AuthServiceService } from "../services/auth.service.service";
import { map } from "rxjs";

export function emailValidator(authService : AuthServiceService){
    return (control : AbstractControl) => {
        return authService.checkEmailAvailability(control.value).pipe(
            map(isTaken => (isTaken ? {emailtaken : true} : null))
        )
    }
}