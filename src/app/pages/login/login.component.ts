import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase imports
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    ConfirmationResult
} from 'firebase/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
    isSignUp = false;
    isMobileSignin = false;
    otpSent = false;

    signupForm: FormGroup;
    signinForm: FormGroup;
    mobileSigninForm: FormGroup;
    otpForm: FormGroup;

    confirmationResult?: ConfirmationResult;

    constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            name: [''],
            email: [''],
            mobile: [''],
            password: ['']
        });

        this.signinForm = this.fb.group({
            email: [''],
            password: ['']
        });

        this.mobileSigninForm = this.fb.group({
            mobile: ['']
        });

        this.otpForm = this.fb.group({
            otp: ['']
        });
    }

    // 🔄 Toggle email ↔ mobile sign in
    toggleMobileSignin(event: Event) {
        event.preventDefault();
        this.isMobileSignin = !this.isMobileSignin;
        this.otpSent = false;
    }

    // 🟢 Email Sign In
    onSignin() {
        console.log('Signin data:', this.signinForm.value);
    }

    // 🟢 Sign Up
    onSignup() {
        console.log('Signup data:', this.signupForm.value);
    }

    // 🟢 Send OTP
    onSendOtp() {
        const auth = getAuth();
        const phoneNumber = '+91' + this.mobileSigninForm.value.mobile; // 👈 use your country code
        const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                this.confirmationResult = confirmationResult;
                this.otpSent = true;
                console.log('OTP sent');
            })
            .catch((error) => {
                console.error('SMS not sent', error);
            });
    }

    // 🟢 Verify OTP
    onVerifyOtp() {
        const otp = this.otpForm.value.otp;
        if (this.confirmationResult) {
            this.confirmationResult.confirm(otp)
                .then((result) => {
                    console.log('User signed in:', result.user);
                })
                .catch((error) => {
                    console.error('Invalid OTP', error);
                });
        }
    }
}
