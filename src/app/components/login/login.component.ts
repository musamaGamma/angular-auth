import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  hide = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  getErrorMessage(field: string) {
    if (this.loginForm.get(field)?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get(field)?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  login() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.authService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'you are logged in',
          loading: 'please wait',
          error: 'an error occured',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnInit(): void {
    console.log(this.router.url);
  }
}
