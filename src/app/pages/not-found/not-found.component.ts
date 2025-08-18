import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    imports: [SharedModule, FooterComponent, FashionHeaderComponent]
})
export class NotFoundComponent {

}
