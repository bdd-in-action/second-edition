import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  getEmailErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'Please enter your email';
    }
    // return this.form.get('email') ? 'Please enter a valid email address' : '';
  }

  login(form: FormGroup) {
    if (form.valid) {
      console.log('email: ' + form.value.email + ', pwd: ' + form.value.password);
      this.authService.login({ email: form.value.email, password: form.value.password });
    }
  }

}
