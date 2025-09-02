import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { SharedModule } from '../../app/shared.module';
import { DomUtilsService } from '../../app/shared/services/dom-utils.service';
import { ShopByCategoryService } from './shopbycategoryService';
import { ShopByCategory } from './shopbycategorymodel';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shopbycategory.html',
  styleUrls: ['./shopbycategory.scss'],
  imports: [SharedModule]
})
export class ShopByCategoryComponent implements AfterViewInit {
  public categories: ShopByCategory[] = [];

  @ViewChild('categorySlider', { static: false }) categorySliderRef!: ElementRef;
  @ViewChild('categoryPrev', { static: false }) categoryPrevRef!: ElementRef;
  @ViewChild('categoryNext', { static: false }) categoryNextRef!: ElementRef;

  constructor(
    private categoryService: ShopByCategoryService,
    private domUtil: DomUtilsService
  ) {
    this.categoryService.categories.subscribe(cats => {
      this.categories = cats;
    });
  }

  ngAfterViewInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper(this.categorySliderRef.nativeElement, {
        modules: [Navigation, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        coverflowEffect: {
          rotate: 25,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: this.categoryNextRef.nativeElement,
          prevEl: this.categoryPrevRef.nativeElement,
        },
        breakpoints: {
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        },
      });
    });
  }
}
