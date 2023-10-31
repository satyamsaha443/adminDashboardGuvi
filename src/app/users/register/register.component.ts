import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  genders: string[] = ["Male", "Female"]
  registerForm: FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'confirm-password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    },{
      validators: this.matchValidator
    })
  }

  matchValidator(control: AbstractControl){
    const password: string = control.get("password").value
    const confirmPassword: string = control.get("confirm-password").value
    if(!confirmPassword?.length) return null
    if(confirmPassword.length < 3){
      control.get("confirm-password").setErrors({'minlength': 'Password must be at least 3 characters long'})
      return {'minlength': 'Password must be at least 3 characters long'}
    }
    if(confirmPassword !== password){
      control.get("confirm-password").setErrors({'mismatch': 'Passwords do not match'})
      return {'mismatch': 'Passwords do not match'}
    } 
    return null
  }

  onSubmit(){
    console.log(this.registerForm)
  }

  getFormControl(controlName: string): AbstractControl {
    return this.registerForm.get(controlName);
  }

}
