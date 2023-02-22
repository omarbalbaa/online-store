import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private _fb:FormBuilder) {
    this.registerForm = _fb.group({
      email:['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: this._fb.array([this.addAddress()]),
    });
  }

  addAddress(){
    return this._fb.group({
      city: [''],
      street: ['']
    })
  }

  addNewAddress(){
     const addresses = this.registerForm.controls['address'] as FormArray;
     addresses.push(this.addAddress());
  }
  
  get registerControls(){
    return this.registerForm.controls;
  }
  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(form);
  }
}
