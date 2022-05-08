import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  signUpForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: passwordsMatchValidator() }
  );

  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmpassword() {
    return this.signUpForm.get('confirmpassword');
  }
  getErrorMessage(field: string) {
    if (this.signUpForm.get(field)?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.signUpForm.get(field)?.hasError('minlength')) {
      return 'please enter a valid password';
    }
    if (this.signUpForm.errors?.['passwordsDontMatch']) {
      return 'the password you entered dont match';
    }
    return this.signUpForm.get(field)?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  ngOnInit(): void {}
  signup() {
    if (this.signUpForm.invalid) return;
    const { email, password, username } = this.signUpForm.value;
    this.authService
      .signup(email, password, username)
      .pipe(
        this.toast.observe({
          loading: 'loading..',
          success: 'you signed up successfully',
          error: 'an error occured',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');
    console.log({ confirmPassword });
    if (
      password?.value &&
      confirmPassword?.value &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordsDontMatch: true });
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}
