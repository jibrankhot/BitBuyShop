import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
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

  @ViewChild('recommendedSlider', { static: false }) recommendedSliderRef!: ElementRef;
  @ViewChild('recommendedPrev', { static: false }) recommendedPrevRef!: ElementRef;
  @ViewChild('recommendedNext', { static: false }) recommendedNextRef!: ElementRef;

  @ViewChildren('productCarousel') productCarousels!: QueryList<ElementRef>;

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
      // Overall recommended slider
      new Swiper(this.recommendedSliderRef.nativeElement, {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        modules: [Navigation, Scrollbar],
        navigation: {
          nextEl: this.recommendedNextRef.nativeElement,
          prevEl: this.recommendedPrevRef.nativeElement,
        },
        scrollbar: {
          el: this.recommendedSliderRef.nativeElement.querySelector('.swiper-scrollbar'),
          draggable: true,
        },
        breakpoints: {
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        },
      });

      // Nested product carousels
      this.productCarousels.forEach((carouselRef: ElementRef, index: number) => {
        const el = carouselRef.nativeElement as HTMLElement;
        const nextBtn = el.querySelector('.product-next') as HTMLElement;
        const prevBtn = el.querySelector('.product-prev') as HTMLElement;

        new Swiper(el, {
          slidesPerView: 1,
          loop: true,
          nested: true,
          modules: [Navigation],
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
        });
      });
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
