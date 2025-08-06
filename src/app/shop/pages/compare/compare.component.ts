
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { CompareService } from '../../../shared/services/compare.service';
import { CartService } from '../../../shared/services/cart.service';
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-compare',
    templateUrl: './compare.component.html',
    styleUrls: ['./compare.component.scss'],
    imports: [SharedModule, HeaderTwoComponent, BreadcrumbOneComponent, FooterOneComponent]
})
export class CompareComponent {

  constructor(public compareService: CompareService, public cartService: CartService) { }
}
