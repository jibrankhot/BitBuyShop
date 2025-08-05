import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-shop-sixteen-thousand-px',
    templateUrl: './shop-sixteen-thousand-px.component.html',
    styleUrls: ['./shop-sixteen-thousand-px.component.scss'],
    standalone: true,
    imports: [SharedModule, HeaderTwoComponent, BreadcrumbOneComponent, ShopAreaComponent, FooterOneComponent]
})
export class ShopSixteenThousandPxComponent {

}
