import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import sampleData from 'src/assets/data.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  submitted = false;
  users: any = sampleData;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });

  }
  get fControl() { return this.loginForm.controls; }
  logIn() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }

      let userArray = this.users;
      userArray.forEach((value,index) => {
        if((this.loginForm.controls['email'].value != null || this.loginForm.controls['password'].value != null)
         && (this.loginForm.controls['email'].value ==
        value.email && this.loginForm.controls['password'].value == value.password)){
         this.router.navigate(['/users'])
         localStorage.setItem('userDetails',JSON.stringify(this.loginForm.value))
        }
      })
    }
}
