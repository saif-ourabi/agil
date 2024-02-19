import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private register: RegisterService,private r:Router ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name() { return this.registrationForm.get('name'); }
  get firstName() { return this.registrationForm.get('firstName'); }
  get phoneNumber() { return this.registrationForm.get('phoneNumber'); }
  get gender() { return this.registrationForm.get('gender'); }
  get role() { return this.registrationForm.get('role'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.register.register(this.registrationForm.value).subscribe({
        next: (rep: any) => {
          this.r.navigate(["/login"])
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 400 && error.error === 'Email already exists') {
            this.errorMessage = 'Email already exists. Please choose a different email address.';
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

