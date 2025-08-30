import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Firebase imports
import {
    Auth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    ConfirmationResult,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    UserCredential
} from '@angular/fire/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
    private auth: Auth = inject(Auth);
    private toastr = inject(ToastrService);

    isSignUp = false;
    isMobileSignin = false;
    otpSent = false;
    showForgotPassword = false;

    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: ConfirmationResult;

    signupForm: FormGroup;
    signinForm: FormGroup;
    mobileSigninForm: FormGroup;
    otpForm: FormGroup;
    forgotPasswordForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.signupForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.signinForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.mobileSigninForm = this.fb.group({
            mobile: ['', Validators.required]
        });

        this.otpForm = this.fb.group({
            otp: ['', Validators.required]
        });

        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    ngOnInit() {
        if (!this.recaptchaVerifier) {
            this.recaptchaVerifier = new RecaptchaVerifier(
                this.auth,
                'recaptcha-container',
                { size: 'invisible' }
            );
        }
    }

    toggleMobileSignin(event: Event) {
        event.preventDefault();
        this.isMobileSignin = !this.isMobileSignin;
        this.otpSent = false;
        this.mobileSigninForm.reset();
        this.otpForm.reset();
    }

    async onSignup() {
        const { email, password } = this.signupForm.value;

        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            console.log('User signed up:', userCredential.user);

            this.toastr.success('Sign up successful! Redirecting...');
            this.signupForm.reset();

            setTimeout(() => {
                this.isSignUp = false;
            }, 1000);
        } catch (error: any) {
            console.error('Sign up error:', error);
            this.toastr.error(error.message || 'Sign up failed.');
        }
    }

    async onSignin() {
        const { email, password } = this.signinForm.value;

        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(this.auth, email, password);
            console.log('User signed in:', userCredential.user);

            this.toastr.success('Signed in successfully! Redirecting...');
            this.signinForm.reset();

            setTimeout(() => {
                this.router.navigate(['/home/fashion']);
            }, 1000);
        } catch (error: any) {
            console.error('Sign in error:', error);
            this.toastr.error(error.message || 'Sign in failed.');
        }
    }

    onSendOtp() {
        const phoneNumber = '+91' + this.mobileSigninForm.value.mobile;

        if (!this.recaptchaVerifier) {
            this.toastr.error('Recaptcha not initialized properly.');
            return;
        }

        signInWithPhoneNumber(this.auth, phoneNumber, this.recaptchaVerifier)
            .then((confirmationResult) => {
                this.confirmationResult = confirmationResult;
                this.otpSent = true;
                console.log('OTP sent');
                this.toastr.success('OTP sent successfully!');
            })
            .catch((error) => {
                console.error('SMS not sent', error);
                this.toastr.error(error.message || 'Failed to send OTP.');
            });
    }

    onVerifyOtp() {
        const otp = this.otpForm.value.otp;
        if (!this.confirmationResult) return;

        this.confirmationResult.confirm(otp)
            .then((result) => {
                console.log('User signed in via OTP:', result.user);
                this.toastr.success('Signed in successfully with mobile OTP! Redirecting...');

                this.mobileSigninForm.reset();
                this.otpForm.reset();
                this.isMobileSignin = false;
                this.otpSent = false;

                setTimeout(() => {
                    this.router.navigate(['/home/fashion']);
                }, 1500);
            })
            .catch((error) => {
                console.error('Invalid OTP', error);
                this.toastr.error('Invalid OTP. Please try again.');
            });
    }

    async onForgotPassword() {
        const { email } = this.forgotPasswordForm.value;

        if (!email) {
            this.toastr.error('Please enter your email.');
            return;
        }

        try {
            await sendPasswordResetEmail(this.auth, email);
            this.toastr.success('Password reset link sent to your email.');
            this.forgotPasswordForm.reset();
            this.showForgotPassword = false;
        } catch (error: any) {
            console.error('Password reset error:', error);
            this.toastr.error(error.message || 'Failed to send reset link.');
        }
    }

    onShowForgotPassword(event: Event) {
        event.preventDefault();
        this.showForgotPassword = true;
        this.signinForm.reset();
    }
}
