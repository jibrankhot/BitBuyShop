import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SharedModule } from '../../app/shared.module';
import { IProduct } from '../../app/shared/types/product-type';
import { CartService } from '../../app/shared/services/cart.service';
import { DomUtilsService } from '../../app/shared/services/dom-utils.service';
import { RecommendedProductsService } from './RecommendedProductsService';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommendedproducts.html',
  styleUrls: ['./recommendedproducts.scss'],
  imports: [SharedModule]
})
export class RecommendedProductsComponent implements AfterViewInit {
  public recommendedProducts: IProduct[] = [];

  constructor(
    public cartService: CartService,
    public recommendedService: RecommendedProductsService,
    private domUtil: DomUtilsService
  ) {
    this.recommendedService.products.subscribe((products) => {
      this.recommendedProducts = products
        .filter((p) => p.productType === 'recommendedProducts')
        .slice(0, 8);
    });
  }

  ngAfterViewInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper('.recommended-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        modules: [Navigation, Scrollbar],
        navigation: {
          nextEl: '.next-button',
          prevEl: '.previous-button',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        breakpoints: {
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        },
      });

      setTimeout(() => {
        document.querySelectorAll('.product-carousel').forEach((carouselEl: any, index: number) => {
          new Swiper(`.product-carousel-${index}`, {
            slidesPerView: 1,
            loop: true,
            nested: true,
            modules: [Navigation],
            navigation: {
              nextEl: `.product-next-${index}`,
              prevEl: `.product-previous-${index}`,
            },
          });
        });
      }, 0);
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }

  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some(
      (product: IProduct) => product.id === item.id
    );
  }
}
