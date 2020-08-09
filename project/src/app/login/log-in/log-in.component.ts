import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  user: String = "sophos";
  pass: String = "sophos#123";
  attempt: number = 3;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  logIn() {
    if (this.user == this.loginForm.controls.username.value && this.pass == this.loginForm.controls.password.value) {
      alert("Login successfully");
      window.location.href = "https://www.google.com/";
      return false;
    } else {
      if (this.attempt != 0) {
        this.attempt--;
      }
      alert("You have left " + this.attempt + " attempt;");
      if (this.attempt == 0) {
        this.loginForm.controls.username.disable();
        this.loginForm.controls.password.disable();
        alert("Your Attempts over;");
        return false;
      }
    }

  }

}
