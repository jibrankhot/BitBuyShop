import { Routes } from "@angular/router";
import { authGuard } from "../shared/services/auth.guard";
import { ContactComponent } from "./contact/contact.component";
import { CouponComponent } from "./coupon/coupon.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchComponent } from "./search/search.component";

export const pagesRoutes: Routes = [
    { path: 'contact', canActivate: [authGuard], component: ContactComponent, title: 'Contact Page' },
    { path: 'coupons', canActivate: [authGuard], component: CouponComponent, title: 'Coupon Page' },
    { path: 'about', canActivate: [authGuard], component: AboutComponent, title: 'About Page' },
    { path: 'login', canActivate: [authGuard], component: LoginComponent, title: 'Login Page' },
    { path: 'register', canActivate: [authGuard], component: RegisterComponent, title: 'Register Page' },
    { path: 'forgot', canActivate: [authGuard], component: ForgotPasswordComponent, title: 'Forgot Page' },
    { path: 'checkout', canActivate: [authGuard], component: CheckoutComponent, title: 'Checkout Page' },
    { path: 'profile', canActivate: [authGuard], component: ProfileComponent, title: 'Profile Page' },
    { path: 'search', canActivate: [authGuard], component: SearchComponent, title: 'Search Page' },


    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];