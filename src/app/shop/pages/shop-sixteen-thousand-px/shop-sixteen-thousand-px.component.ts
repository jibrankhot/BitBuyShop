import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
    selector: 'app-shop-sixteen-thousand-px',
    templateUrl: './shop-sixteen-thousand-px.component.html',
    styleUrls: ['./shop-sixteen-thousand-px.component.scss'],
    imports: [SharedModule, FashionHeaderComponent, BreadcrumbOneComponent, ShopAreaComponent, FooterComponent]
})
export class ShopSixteenThousandPxComponent {

}
