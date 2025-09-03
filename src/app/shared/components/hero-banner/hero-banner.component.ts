import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { SharedModule } from '../../../shared.module';
import { DomUtilsService } from '../../services/dom-utils.service';

// Import CSS (needed for swiper styles)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  imports: [SharedModule],
  standalone: true,
})
export class HeroBannerComponent implements AfterViewInit {
  public slider_data = [
    {
      id: 1,
      subtitle: 'New Arrivals 2023',
      title: 'The Clothing Collection',
      img: '/assets/Images/HeroBanner/Sliders/slider1.webp',
    },
    {
      id: 2,
      subtitle: 'Best Selling 2023',
      title: 'The Summer Collection',
      img: '/assets/Images/HeroBanner/Sliders/slider2.webp',
    },
    {
      id: 3,
      subtitle: 'Winter Has Arrived',
      title: 'Amazing New Designs',
      img: '/assets/Images/HeroBanner/Sliders/slider3.webp',
    },
  ];

  constructor(private domUtil: DomUtilsService) { }

  ngAfterViewInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper('.tp-slider-active-2', {
        modules: [Navigation, Pagination, EffectFade, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.tp-slider-2-button-next',
          prevEl: '.tp-slider-2-button-prev',
        },
        pagination: {
          el: '.tp-slider-2-dot',
          clickable: true,
        },
      });
    });
  }
}
