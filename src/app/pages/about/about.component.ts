import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SharedModule } from '../../shared.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { DomUtilsService } from '../../shared/services/dom-utils.service';
register();

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [SharedModule, FooterComponent, FashionHeaderComponent]
})
export class AboutComponent {
  constructor(
    private domUtil: DomUtilsService
  ) { }

  // history slider data
  slider_data = [
    {
      title: "About our <br> Online Store",
      subtitle_1:
        "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
      subtitle_2:
        "So start browsing today and find the perfect products to suit your needs!",
      img: "/assets/img/history/history-1.jpg",
      thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
      year: 2016,
    },
    {
      title: "About our <br> Online Store",
      subtitle_1:
        "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
      subtitle_2:
        "So start browsing today and find the perfect products to suit your needs!",
      img: "/assets/img/history/history-2.jpg",
      thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
      year: 2017,
    },
    {
      title: "About our <br> Online Store",
      subtitle_1:
        "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
      subtitle_2:
        "So start browsing today and find the perfect products to suit your needs!",
      img: "/assets/img/history/history-1.jpg",
      thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
      year: 2018,
    },
    {
      title: "About our <br> Online Store",
      subtitle_1:
        "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
      subtitle_2:
        "So start browsing today and find the perfect products to suit your needs!",
      img: "/assets/img/history/history-2.jpg",
      thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
      year: 2019,
    },
  ];

  // history slider nav data
  slider_nav_data = [2016, 2017, 2018, 2019];

  ngOnInit() {
    this.domUtil.runInBrowser(() => {
      const swiper = new Swiper(".tp-history-nav-active", {
        spaceBetween: 220,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      new Swiper(".tp-history-slider-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: swiper,
        },
      });
    });

  }
}
