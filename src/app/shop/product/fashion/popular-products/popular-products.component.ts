import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { CartService } from '../../../../shared/services/cart.service';
import { ProductService } from '../../../../shared/services/product.service';
import { DomUtilsService } from '../../../../shared/services/dom-utils.service';
@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss'],
  imports: [SharedModule]
})


export class PopularProductsComponent {


  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }


  public popular_prd: IProduct[] = [];

  constructor(
    public cartService: CartService,
    public productService: ProductService,
    private domUtil: DomUtilsService) {
    this.productService.products.subscribe((products) => {
      this.popular_prd = products.filter((p) => p.productType === "fashion").slice(0, 8);
    });
  }

  ngOnInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper('.tp-category-slider-active-2', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: false,
        modules: [Pagination, Navigation, Scrollbar],
        pagination: {
          el: '.tp-category-slider-dot',
          clickable: true,
        },
        navigation: {
          nextEl: '.tp-category-slider-button-next',
          prevEl: '.tp-category-slider-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          dragClass: 'tp-swiper-scrollbar-drag',
          snapOnRelease: true,
        },
        breakpoints: {
          '1200': {
            slidesPerView: 5,
          },
          '992': {
            slidesPerView: 4,
          },
          '768': {
            slidesPerView: 3,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 1,
          },
        },
      });
    });
  }
}
