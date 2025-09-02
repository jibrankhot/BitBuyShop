import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../types/product-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orderQuantity: number = 1;
  public isCartOpen: boolean = false;
  private cart_products: IProduct[] = [];
  private isBrowser: boolean;

  // NEW: reactive cart observable
  private cartSubject = new BehaviorSubject<IProduct[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor(
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.cart_products = JSON.parse(localStorage.getItem('cart_products') || '[]');
      this.cartSubject.next(this.cart_products); // initialize observable
    }
  }

  public getCartProducts(): IProduct[] {
    return this.cart_products;
  }

  handleOpenCartSidebar() {
    this.isCartOpen = !this.isCartOpen;
  }

  addCartProduct(payload: IProduct) {
    const isExist = this.cart_products.some((i: IProduct) => i.id === payload.id);

    if (payload.status === 'out-of-stock' || payload.quantity === 0) {
      this.toastrService.error(`Out of stock ${payload.title}`);
    } else if (!isExist) {
      const newItem = { ...payload, orderQuantity: 1 };
      this.cart_products.push(newItem);
      this.toastrService.success(`${payload.title} added to cart`);
    } else {
      this.cart_products = this.cart_products.map((item: IProduct) => {
        if (item.id === payload.id && item.orderQuantity !== undefined) {
          if (item.quantity >= item.orderQuantity + this.orderQuantity) {
            item.orderQuantity += this.orderQuantity;
            this.toastrService.success(`${this.orderQuantity} ${item.title} added to cart`);
          } else {
            this.toastrService.success(`No more quantity available for this product!`);
            this.orderQuantity = 1;
          }
        }
        return { ...item };
      });
    }

    this.saveCart();
    this.cartSubject.next(this.cart_products); // update observable
  }

  quantityDecrement(payload: IProduct) {
    this.cart_products = this.cart_products.map((item: IProduct) => {
      if (item.id === payload.id && item.orderQuantity && item.orderQuantity > 1) {
        item.orderQuantity -= 1;
        this.toastrService.info(`Decrement Quantity For ${item.title}`);
      }
      return { ...item };
    });
    this.saveCart();
    this.cartSubject.next(this.cart_products);
  }

  removeCartProduct(payload: IProduct) {
    this.cart_products = this.cart_products.filter(p => p.id !== payload.id);
    this.toastrService.error(`${payload.title} removed from cart`);
    this.saveCart();
    this.cartSubject.next(this.cart_products); // update observable
  }

  clear_cart() {
    const confirmMsg = this.isBrowser ? window.confirm("Are you sure you want to delete all cart items?") : false;
    if (confirmMsg) {
      this.cart_products = [];
      this.saveCart();
      this.cartSubject.next(this.cart_products);
    }
  }

  totalPriceQuantity() {
    return this.cart_products.reduce((cartTotal, cartItem) => {
      const { price, orderQuantity, discount } = cartItem;
      if (orderQuantity) {
        const itemTotal = discount && discount > 0
          ? (price - (price * discount) / 100) * orderQuantity
          : price * orderQuantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += orderQuantity;
      }
      return cartTotal;
    }, { total: 0, quantity: 0 });
  }

  increment() {
    return this.orderQuantity += 1;
  }

  decrement() {
    return this.orderQuantity = this.orderQuantity > 1 ? this.orderQuantity - 1 : 1;
  }

  initialOrderQuantity() {
    return this.orderQuantity = 1;
  }

  private saveCart() {
    if (this.isBrowser) {
      localStorage.setItem('cart_products', JSON.stringify(this.cart_products));
    }
  }
}
