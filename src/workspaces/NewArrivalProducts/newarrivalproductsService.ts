import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewArrivalProducts } from './newarrivalproductsmodel';
import { newArrivalProducts } from './newarrivalproductsData';
import { CartService } from '../../app/shared/services/cart.service';

@Injectable({
    providedIn: 'root'
})
export class NewArrivalProductsService {
    private productsData: NewArrivalProducts[] = newArrivalProducts;
    private cartSubject = new BehaviorSubject<NewArrivalProducts[]>([]);
    public cart$ = this.cartSubject.asObservable();
    public filter_offcanvas: boolean = false;
    public activeImg: string | undefined;

    constructor(private cartService: CartService) {
        // Sync cart with main CartService
        this.cartService.getCartProducts(); // initialize if needed
    }

    handleImageActive(img: string) {
        this.activeImg = img;
    }

    public get products(): Observable<NewArrivalProducts[]> {
        return of(this.productsData);
    }

    public getProductById(id: string): Observable<NewArrivalProducts | undefined> {
        return this.products.pipe(
            map(items => {
                const product = items.find(p => p.id === id);
                if (product) this.handleImageActive(product.img);
                return product;
            })
        );
    }

    public filterProducts(filter: string[] = []): Observable<NewArrivalProducts[]> {
        return this.products.pipe(
            map(items => items.filter(item => !filter.length || filter.some(tag => item.tags?.includes(tag))))
        );
    }

    public sortProducts(products: NewArrivalProducts[], sortBy: string): NewArrivalProducts[] {
        if (sortBy === 'asc') return [...products].sort((a, b) => a.id.localeCompare(b.id));
        if (sortBy === 'low') return [...products].sort((a, b) => a.price - b.price);
        if (sortBy === 'high') return [...products].sort((a, b) => b.price - a.price);
        if (sortBy === 'on-sale') return products.filter(p => p.discount > 0);
        return products;
    }

    public get maxPrice(): number {
        return Math.max(...this.productsData.map(p => p.price));
    }

    // ===================== CART METHODS =====================

    getCart(): NewArrivalProducts[] {
        return this.cartSubject.value;
    }

    addToCart(product: NewArrivalProducts) {
        if (product.quantity <= 0) return;

        const cart = [...this.cartSubject.value];
        const existing = cart.find(p => p.id === product.id);

        if (!existing) {
            cart.push({ ...product, orderQuantity: 1 });
        } else if ((existing.orderQuantity ?? 0) < product.quantity) {
            existing.orderQuantity! += 1;
        }

        this.cartSubject.next(cart);
        this.cartService.addCartProduct(product); // sync with main cart
    }

    decrementFromCart(product: NewArrivalProducts) {
        const cart = this.cartSubject.value.map(p => {
            if (p.id === product.id && p.orderQuantity && p.orderQuantity > 1) {
                p.orderQuantity!--;
            }
            return { ...p };
        });
        this.cartSubject.next(cart);
    }

    removeFromCart(product: NewArrivalProducts) {
        const cart = this.cartSubject.value.filter(p => p.id !== product.id);
        this.cartSubject.next(cart);
        this.cartService.removeCartProduct(product); // sync with main cart
    }

    clearCart() {
        this.cartSubject.next([]);
        this.cartService.clear_cart();
    }
}
