import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly router: Router = inject(Router);
  form = new FormGroup<any>({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  constructor() {}

  login() {
    localStorage.setItem('userLoginAndPassword', JSON.stringify(this.form.value))
    this.router.navigate(["/"]).catch()
  }
}
