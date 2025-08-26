import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { FooterComponent } from '../../shared/footer/footer.component';
import { Company } from '../../../assets/data/companydata/company.model';
import { CompanyService } from '../../../assets/data/companydata/company.service';
import { Auth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
        confirmationResult: ConfirmationResult;
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        SharedModule,
        FashionHeaderComponent,
        FooterComponent,
        FormsModule
    ]
})
export class LoginComponent {
    phoneNumber: string = '';
    otp: string = '';
    otpSent: boolean = false;

    private auth = inject(Auth); // ✅ Inject Auth from AngularFire

    public company: Company = {
        logo: { src: '', link: '/' },
        contact: { phone: '', email: '', address: '', addressLink: '' },
        sections: [],
        subscribe: { title: '', description: '' },
        social: { title: '', links: [] },
        bottom: { copyright: '', paymentImg: '', paymentAlt: '' },
        companyName: ''
    };

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        this.companyService.getCompanies().subscribe((data: Company[]) => {
            if (data && data.length > 0) {
                this.company = data[0];
            }
        });
    }

    SendOTP() {
        if (!this.phoneNumber) {
            alert('Please enter a valid phone number');
            return;
        }

        const container = document.getElementById('recaptcha-container');
        if (!container) {
            alert('reCAPTCHA container not found!');
            return;
        }

        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                this.auth,                  // ✅ Use injected Auth
                'recaptcha-container',      // container ID
                { size: 'invisible' }       // invisible reCAPTCHA
            );
        }

        const formattedNumber = this.phoneNumber.startsWith('+') ? this.phoneNumber : '+91' + this.phoneNumber;

        signInWithPhoneNumber(this.auth, formattedNumber, window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                this.otpSent = true;
                alert('OTP sent to ' + formattedNumber);
            })
            .catch((error) => {
                console.error(error);
                alert('Error sending OTP: ' + error.message);
            });
    }

    verifyOTP() {
        if (!this.otp) {
            alert('Please enter the OTP');
            return;
        }

        window.confirmationResult.confirm(this.otp)
            .then((result) => {
                const user = result.user;
                console.log('User signed in:', user);
                alert('Login successful! Welcome, ' + user.phoneNumber);
                this.otpSent = false;
                this.phoneNumber = '';
                this.otp = '';
            })
            .catch((error) => {
                console.error(error);
                alert('Invalid OTP, please try again');
            });
    }
}
