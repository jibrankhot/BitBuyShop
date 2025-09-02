import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SharedModule } from '../../app/shared.module';
import { NewArrivalProducts } from './newarrivalproductsmodel';
import { NewArrivalProductsService } from './newarrivalproductsService';
import { DomUtilsService } from '../../app/shared/services/dom-utils.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './newarrivalproducts.html',
  styleUrls: ['./newarrivalproducts.scss'],
  imports: [SharedModule]
})
export class NewArrivalProductsComponent implements AfterViewInit {
  public newArrivalProducts: NewArrivalProducts[] = [];
  public cartItems: NewArrivalProducts[] = [];

  @ViewChild('newArrivalSlider', { static: false }) newArrivalSliderRef!: ElementRef;
  @ViewChild('newArrivalPrev', { static: false }) newArrivalPrevRef!: ElementRef;
  @ViewChild('newArrivalNext', { static: false }) newArrivalNextRef!: ElementRef;
  @ViewChildren('productCarousel') productCarousels!: QueryList<ElementRef>;

  constructor(
    public newArrivalService: NewArrivalProductsService,
    private domUtil: DomUtilsService
  ) {
    // Subscribe to products
    this.newArrivalService.products.subscribe((products) => {
      this.newArrivalProducts = products
        .filter((p) => p.productType === 'newArrivalProducts') // update productType if needed
        .slice(0, 8);
    });

    // Subscribe to cart updates
    this.newArrivalService.cart$.subscribe(cart => {
      this.cartItems = cart;
    });
  }

  ngAfterViewInit(): void {
    this.domUtil.runInBrowser(() => {
      // Outer new arrivals slider
      new Swiper(this.newArrivalSliderRef.nativeElement, {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        modules: [Navigation, Scrollbar],
        navigation: {
          nextEl: this.newArrivalNextRef.nativeElement,
          prevEl: this.newArrivalPrevRef.nativeElement,
        },
        scrollbar: {
          el: this.newArrivalSliderRef.nativeElement.querySelector('.swiper-scrollbar'),
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
      this.productCarousels.forEach((carouselRef: ElementRef) => {
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

  // ====================== CART METHODS ======================

  addToCart(product: NewArrivalProducts) {
    this.newArrivalService.addToCart(product);
  }

  isItemInCart(item: NewArrivalProducts): boolean {
    return this.cartItems.some(p => p.id === item.id);
  }
}
