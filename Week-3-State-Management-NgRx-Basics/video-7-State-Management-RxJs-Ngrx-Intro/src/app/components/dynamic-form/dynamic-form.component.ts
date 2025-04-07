import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {

  form! : FormGroup;

  constructor(private fb : FormBuilder){
    this.form = this.fb.group({
      addresses : this.fb.array([]), 
    })

    this.addAddress();

    // add
    //remove
 
  }

  get addresses() : FormArray {
    return this.form.get('addresses') as FormArray;
  }

  addAddress(){
    const addressGroup = this.fb.group({
      street : ['', Validators.required],
      city : ['', Validators.required],
      zip : ['', Validators.required],
    })

    this.addresses.push(addressGroup);

  }

  removeAddress(index : number){
    this.addresses.removeAt(index);
  }

  submit(){
    console.log('form data', this.form.value);
    
  }


}
