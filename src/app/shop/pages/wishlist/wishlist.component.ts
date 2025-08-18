
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { CartService } from '../../../shared/services/cart.service';
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  imports: [SharedModule, FooterComponent, BreadcrumbOneComponent, FashionHeaderComponent]
})
export class WishlistComponent {

  constructor(public wishlistService: WishlistService, public cartService: CartService) { }
}
