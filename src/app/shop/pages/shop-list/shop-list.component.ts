import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterComponent } from '../../../shared/footer/footer.component';
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.scss'],
    imports: [SharedModule, ShopAreaComponent, FooterComponent, BreadcrumbOneComponent, FashionHeaderComponent]
})
export class ShopListComponent {

}
