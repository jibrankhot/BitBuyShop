import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { SocialLoginComponent } from "../../shared/components/social-login/social-login.component";
import { LoginFormComponent } from "../../shared/components/forms/login-form/login-form.component";
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [SharedModule, FashionHeaderComponent, SocialLoginComponent, LoginFormComponent, FooterComponent]
})
export class LoginComponent {

}
