import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactFormComponent } from "../../shared/components/forms/contact-form/contact-form.component";
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [SharedModule, FooterComponent, ContactFormComponent, FashionHeaderComponent]
})
export class ContactComponent {

}
