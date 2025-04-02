import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service.service';
import { emailValidator } from 'src/app/validators/email.validator';
import { strongPasswordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm! : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthServiceService){
    this.signupForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email], [emailValidator(authService)] ],
      password : ['', [Validators.required, Validators.minLength(6), strongPasswordValidator]]
    })
  }

  a(){
    console.log(this.signupForm.get('email')?.errors);
  }
  
  onSubmit(){
    if(this.signupForm.valid){
      console.log('Form Submitted', this.signupForm.value);
      
    }
  }
}
