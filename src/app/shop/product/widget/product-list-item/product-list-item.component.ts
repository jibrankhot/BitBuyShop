import { Component, Input } from '@angular/core';

import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CompareService } from '../../../../shared/services/compare.service';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss'],
    imports: [SharedModule]
})
export class ProductListItemComponent {
  @Input() product!: IProduct;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public compareService: CompareService,
  ) { }
  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
  // add to cart
  addToWishlist(product: IProduct) {
    this.wishlistService.add_wishlist_product(product);
  }
  // add to cart
  addToCompare(product: IProduct) {
    this.compareService.add_compare_product(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
}
