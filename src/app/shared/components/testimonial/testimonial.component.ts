import { Component, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import { SharedModule } from '../../../shared.module';
import { IFashionTestimonial } from '../../types/testimonial-d-type';
import { fashion_testi_data } from '../../data/testimonial-data';
import { DomUtilsService } from '../../services/dom-utils.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  imports: [SharedModule]
})
export class TestimonialComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;

  public testimonial_items: IFashionTestimonial[] = fashion_testi_data;

  constructor(private domUtil: DomUtilsService) { };


  ngAfterViewInit() {

    this.domUtil.runInBrowser(() => {
      if (this.swiperContainer) {
        this.swiperInstance = new Swiper('.tp-testimonial-slider-active', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          modules: [Pagination],
          pagination: {
            el: '.tp-testimonial-slider-dot',
            clickable: true,
          },
        });
      }
    })


  }

  ngOnInit(): void {

  }
}
