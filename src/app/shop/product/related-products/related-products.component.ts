import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../../shared/types/product-type';
import { ProductService } from '../../../shared/services/product.service';
import { DomUtilsService } from '../../../shared/services/dom-utils.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss'],
  imports: [SharedModule],
  standalone: true
})
export class RelatedProductsComponent {
  @Input() productId!: string;
  @Input() category!: string;
  public related_products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private domUtil: DomUtilsService
  ) { }

  private loadRelatedProducts() {
    if (this.productId && this.category) {
      this.productService
        .getRelatedProducts(this.productId, this.category)
        .subscribe((products) => {
          this.related_products = products;

          // Initialize Swiper after data loads (optional delay)
          this.domUtil.runInBrowser(() => {
            setTimeout(() => {
              this.initSwiper();
            }, 0);
          });
        });
    }
  }

  private initSwiper() {
    new Swiper('.tp-product-related-slider-active', {
      slidesPerView: 4,
      spaceBetween: 24,
      modules: [Scrollbar],
      scrollbar: {
        el: ".tp-related-swiper-scrollbar",
        draggable: true,
        dragClass: "tp-swiper-scrollbar-drag",
        snapOnRelease: true,
      },
      breakpoints: {
        "1200": { slidesPerView: 4 },
        "992": { slidesPerView: 3 },
        "768": { slidesPerView: 2 },
        "576": { slidesPerView: 2 },
        "0": { slidesPerView: 1 },
      }
    });
  }

  ngOnInit(): void {
    this.domUtil.runInBrowser(() => {
      this.loadRelatedProducts();
    });
  }
}
