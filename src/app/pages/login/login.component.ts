import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
    isSignUp = false;
    signupForm: FormGroup;
    signinForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            name: [''],
            email: [''],
            password: ['']
        });

        this.signinForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }

    onSignup() {
        console.log('Signup data:', this.signupForm.value);
    }

    onSignin() {
        console.log('Signin data:', this.signinForm.value);
    }
}
