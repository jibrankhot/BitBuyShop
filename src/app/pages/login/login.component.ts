import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { FooterComponent } from '../../shared/footer/footer.component';
import { Company } from '../../../assets/data/companydata/company.model';
import { CompanyService } from '../../../assets/data/companydata/company.service';
import { Auth, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    email: string = '';
    password: string = '';
    showPassword: boolean = false;

    // Toast
    toastMessage: string = '';
    toastType: 'success' | 'error' = 'success';
    toastVisible: boolean = false;

    private auth = inject(Auth);

    public company: Company = {
        logo: { src: '', link: '/' },
        contact: { phone: '', email: '', address: '', addressLink: '' },
        sections: [],
        subscribe: { title: '', description: '' },
        social: { title: '', links: [] },
        bottom: { copyright: '', paymentImg: '', paymentAlt: '' },
        companyName: ''
    };

    constructor(private companyService: CompanyService, private router: Router) { }

    ngOnInit() {
        this.companyService.getCompanies().subscribe((data: Company[]) => {
            if (data && data.length > 0) this.company = data[0];
        });
    }

    showToast(message: string, type: 'success' | 'error' = 'success') {
        this.toastMessage = message;
        this.toastType = type;

        // Reset visibility to trigger fade-in
        this.toastVisible = false;
        setTimeout(() => this.toastVisible = true, 50);

        // Hide after 2s
        setTimeout(() => this.toastVisible = false, 2050);
    }

    login() {
        if (!this.email || !this.password) {
            this.showToast('Please enter both email and password', 'error');
            return;
        }

        signInWithEmailAndPassword(this.auth, this.email, this.password)
            .then(() => {
                this.showToast('Login successful!', 'success');
                setTimeout(() => {
                    this.showToast('Please Wait While Fetching Details...', 'success');
                }, 3000);

                setTimeout(() => this.router.navigate(['/home/fashion']), 5000);
            })
            .catch(error => this.showToast(error.message, 'error'));
    }

    togglePassword() { this.showPassword = !this.showPassword; }

    forgotPassword() {
        if (!this.email) {
            this.showToast('Please enter your email to reset password', 'error');
            return;
        }

        sendPasswordResetEmail(this.auth, this.email)
            .then(() => this.showToast('Password reset email sent! Check your inbox.', 'success'))
            .catch(error => this.showToast(error.message, 'error'));
    }
}
