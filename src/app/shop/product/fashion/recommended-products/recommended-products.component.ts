import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { CartService } from '../../../../shared/services/cart.service';
import { ProductService } from '../../../../shared/services/product.service';
import { DomUtilsService } from '../../../../shared/services/dom-utils.service';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss'],
  imports: [SharedModule]
})
export class RecommendedProductsComponent implements AfterViewInit {
  public recommendedPrd: IProduct[] = [];

  constructor(
    public cartService: CartService,
    public productService: ProductService,
    private domUtil: DomUtilsService
  ) {
    this.productService.products.subscribe((products) => {
      this.recommendedPrd = products
        .filter((p) => p.productType === 'fashion')
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
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
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
              prevEl: `.product-prev-${index}`,
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
      (prd: IProduct) => prd.id === item.id
    );
  }
}
