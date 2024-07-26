import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup | undefined;
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) {}
  ngOnInit() {
    this.initForm();
  }

  async initForm() {
    this.registerForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }
  get f() {
    if(this.registerForm){
      return this.registerForm.controls;
    }
  }
  async login() {
    if (this.registerForm && this.registerForm.invalid) {
      this.registerForm.setErrors({
        ...this.registerForm.errors,
        yourErrorName: true,
      });
      return;
    }
    if(this.f) {
      this.authService
        .register(this.f['username'].value, this.f['password'].value,this.f['email'].value,this.f['confirmPassword'].value)
        .pipe(first())
        .subscribe((user) => {
          if (user.data.token) {
            this.snackBar.open(user.message, '', {
              duration: 1000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
            localStorage.setItem('token', user.data.user.access_token);
            this.router.navigate(['movie']);
          }
          if(user.message){
            this.snackBar.open(user.message, '', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
          }
          else {
            this.snackBar.open('Something was wrong.', '', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
          }
        })
    }

  }
}
