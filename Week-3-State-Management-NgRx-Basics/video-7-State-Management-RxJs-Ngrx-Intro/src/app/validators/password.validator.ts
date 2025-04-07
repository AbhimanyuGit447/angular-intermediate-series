import { AbstractControl, ValidationErrors } from "@angular/forms";

export function strongPasswordValidator(control : AbstractControl) : ValidationErrors | null{
    const value = control.value as string;

    if(!/\d/.test(value)){
        return {strongPassword : true}
    }

    return null;
  
}