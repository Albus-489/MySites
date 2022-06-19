import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURL = 'https://localhost:7062/api';

  formModel = this.fb.group({
    userName: ['', Validators.required],
    email: ['', Validators.email],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    Passwords: this.fb.group({
      password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      userName: this.formModel.value.userName,
      email: this.formModel.value.email,
      password: this.formModel.value.Passwords.password,
      firstName: this.formModel.value.firstName,
      lastName: this.formModel.value.lastName
    };
    return this.http.post(this.BaseURL + '/User/signUp', body);
  }

  login(formData) {
    return this.http.post(this.BaseURL + '/User/signIn', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURL + '/User/GetAuthorize');
  }

  getAllUserNames(){
    return this.http.get(this.BaseURL + '/User/Get')
  }

  getAllBooks(){
    return this.http.get(this.BaseURL + '/Books/Get')
  }
}
