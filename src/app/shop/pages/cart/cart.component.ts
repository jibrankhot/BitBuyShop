
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { CartService } from '../../../shared/services/cart.service';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [SharedModule, FashionHeaderComponent, BreadcrumbOneComponent, FooterComponent]
})
export class CartComponent {

  couponCode: string = '';
  shipCost: number = 0;

  constructor(public cartService: CartService) { }

  handleCouponSubmit() {
    console.log(this.couponCode);
    // Add coupon code handling logic here
    if (this.couponCode) {
      // logic here

      // when submitted the from than empty will be coupon code
      this.couponCode = ''
    }
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }
}
