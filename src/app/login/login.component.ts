import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private r: Router,private l:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      this.l.login(this.loginForm.value).subscribe({
        next: (rep: any) => {
          this.r.navigate(["/home"])
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400 && error.error === 'Incorrect password') {
            this.errorMessage = 'Incorrect password';
            alert(this.errorMessage)
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
            alert(this.errorMessage)
          }
        }
      });
    }
  }
}
