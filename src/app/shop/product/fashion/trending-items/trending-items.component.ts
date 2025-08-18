import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { ProductService } from '../../../../shared/services/product.service';
import { ProductItemTwoComponent } from "../product-item-two/product-item-two.component";
import { DomUtilsService } from '../../../../shared/services/dom-utils.service';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrls: ['./trending-items.component.scss'],
  imports: [SharedModule, ProductItemTwoComponent]
})
export class TrendingItemsComponent {

  public product_items: IProduct[] = [];

  constructor(public productService: ProductService, private domUtil: DomUtilsService) {
    this.productService.products.subscribe((products) => {
      this.product_items = products.filter((p) => p.productType === 'fashion').slice(-4);
    });
  }

  ngOnInit(): void {

    this.domUtil.runInBrowser(() => {
      new Swiper('.tp-trending-slider-active', {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: false,
        modules: [Navigation, Pagination],
        pagination: {
          el: ".tp-trending-slider-dot",
          clickable: true
        },
        navigation: {
          nextEl: ".tp-trending-slider-button-next",
          prevEl: ".tp-trending-slider-button-prev",
        },
        breakpoints: {
          '1200': {
            slidesPerView: 2,
          },
          '992': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 1,
          },
        }
      });
    });

  }
}
