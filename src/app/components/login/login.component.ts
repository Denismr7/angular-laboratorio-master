import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernameError: boolean = false;
  passwordError: boolean = false;
  isUserCorrect: boolean = false;
  isPasswordCorrect: boolean = false;
  errorUserMessage: string;
  errorPassMessage: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  checkLoginValues(target: HTMLInputElement) {
    if (target.name === "username") {
      if (target.value !== "Usuario") {
        this.usernameError = true;
        this.errorUserMessage = "El usuario es incorrecto"
      }
      else {
        this.usernameError = false;
        this.errorUserMessage = "";
        this.isUserCorrect = true;
      }
    }
    if (target.name === "password") {
      if (target.value !== "123") {
        this.passwordError = true;
        this.errorPassMessage = "La contraseña es incorrecta"
      }
      else {
        this.passwordError = false;
        this.errorPassMessage = "";
        this.isPasswordCorrect = true;
      }
    }
  }

  submitForm(event): void {
    event.preventDefault();
    const isLogCorrect = this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
    if (isLogCorrect) {
      console.log("Logged successfully");
      this.router.navigate(['dashboard'])
    }
  }

}
