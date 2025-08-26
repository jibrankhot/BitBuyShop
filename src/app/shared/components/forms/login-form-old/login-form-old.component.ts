import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-login-form-old',
  templateUrl: './login-form-old.component.html',
  styleUrls: ['./login-form-old.component.scss'],
  imports: [SharedModule]
})
export class LoginFormComponent {

  isShowPass = false;
  loginForm!: FormGroup;
  formSubmitted = false;

  constructor(private toastrService: ToastrService, private router: Router) { }

  ngOnInit() {
    // Redirect immediately if already logged in
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/pages/profile']);
      return;
    }

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  handleShowPass() {
    this.isShowPass = !this.isShowPass;
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Simple login simulation
      if (email === 'admin@shofy.com' && password === '123456') {
        sessionStorage.setItem('isLoggedIn', 'true'); // mark user as logged in
        this.toastrService.success('Login successful!');
        this.router.navigate(['/pages/profile']); // redirect to profile
      } else {
        this.toastrService.error('Invalid email or password!');
      }

      this.loginForm.reset();
      this.formSubmitted = false;
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
