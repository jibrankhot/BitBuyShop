
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SharedModule } from '../../../../../shared.module';
import blogData from '../../../../data/blog-data';
import { BlogItemOneComponent } from "../blog-item-one/blog-item-one.component";
import { DomUtilsService } from '../../../../services/dom-utils.service';

@Component({
  selector: 'app-electronic-blog-area',
  templateUrl: './electronic-blog-area.component.html',
  styleUrls: ['./electronic-blog-area.component.scss'],
  imports: [SharedModule, BlogItemOneComponent]
})
export class ElectronicBlogAreaComponent {
  // blog data
  public blog_items = blogData.filter((b) => b.blog === 'electronics');
  constructor(private domUtil: DomUtilsService) { }
  ngOnInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper('.tp-blog-main-slider-active', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
          nextEl: '.tp-blog-main-slider-button-next',
          prevEl: '.tp-blog-main-slider-button-prev',
        },
        pagination: {
          el: '.tp-blog-main-slider-dot',
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
        },
      });
    });

  }
}
