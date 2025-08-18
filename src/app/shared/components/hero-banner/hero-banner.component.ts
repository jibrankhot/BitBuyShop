import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { SharedModule } from '../../../shared.module';
import { DomUtilsService } from '../../services/dom-utils.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  imports: [SharedModule],
  standalone: true
})
export class HeroBannerComponent {
  public slider_data = [
    {
      id: 1,
      subtitle: "New Arrivals 2023",
      title: "The Clothing Collection",
      img: "/assets/img/slider/2/slider-1.png",
    },
    {
      id: 2,
      subtitle: "Best Selling 2023",
      title: "The Summer Collection",
      img: "/assets/img/slider/2/slider-2.png",
    },
    {
      id: 3,
      subtitle: "Winter Has Arrived",
      title: "Amazing New designs",
      img: "/assets/img/slider/2/slider-3.png",
    },
  ];

  constructor(private domUtil: DomUtilsService) { }

  ngOnInit(): void {
    this.domUtil.runInBrowser(() => {
      // run swiper init only in browser
      new Swiper('.tp-slider-active-2', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        effect: 'fade',
        modules: [Navigation, Pagination, EffectFade],
        navigation: {
          nextEl: ".tp-slider-2-button-next",
          prevEl: ".tp-slider-2-button-prev",
        },
        pagination: {
          el: ".tp-slider-2-dot",
          clickable: true
        },
      });
    });

  }
}
