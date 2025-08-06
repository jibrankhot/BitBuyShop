import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { ProductService } from '../../../../shared/services/product.service';
import { ProductItemOneComponent } from "../product-item-one/product-item-one.component";
import { DomUtilsService } from '../../../../shared/services/dom-utils.service';


@Component({
  selector: 'app-electronic-offer-products',
  templateUrl: './electronic-offer-products.component.html',
  styleUrls: ['./electronic-offer-products.component.scss'],
  imports: [SharedModule, ProductItemOneComponent]
})

export class ElectronicOfferProductsComponent {
  // electronic prd
  public electronic_prd: IProduct[] = [];
  // product offer
  public offer_products: IProduct[] = []

  constructor(public productService: ProductService, private domUtil: DomUtilsService) {
    this.productService.products.subscribe((products) => {
      this.electronic_prd = products.filter((p) => p.productType === 'electronics');
      this.offer_products = products.filter((p) => p.productType === 'electronics').filter(
        (p) => p.productType === 'electronics' && p.offerDate
      );
    });
  }

  ngOnInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper('.tp-product-offer-slider-active', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        modules: [Pagination],
        pagination: {
          el: ".tp-deals-slider-dot",
          clickable: true,
        },
        breakpoints: {
          '1200': {
            slidesPerView: 3,
          },
          '992': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 1,
          },
          '0': {
            slidesPerView: 1,
          },
        }
      });
    });

  }
}
