import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service.service';
import { usernameValidator } from 'src/app/validators/username.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  registrationForm! : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthServiceService){
    this.registrationForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(3)], [usernameValidator(this.authService)] ],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      addresses : this.fb.array([]) // dynmic address
    })
  }

  onSubmit(){
    console.log('Form Values', this.registrationForm.value);
    
  }

  get addresses(){
    return this.registrationForm.get('addresses') as FormArray;
  }

  addAddress(){
    this.addresses.push(this.fb.control(''));
  }

  removeAddress(index : number){
    this.addresses.removeAt(index);
  }
}
