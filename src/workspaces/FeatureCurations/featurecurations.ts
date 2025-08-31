import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SharedModule } from '../../app/shared.module';
import { DomUtilsService } from '../../app/shared/services/dom-utils.service';
import { FeatureCurationsCard } from './featurecurationcard.model';
import { Observable } from 'rxjs';
import { FeatureCurationsService } from './featurecurationsService';

@Component({
  selector: 'app-feature-curations',
  templateUrl: './featurecurations.html',
  styleUrls: ['./featurecurations.scss'],
  imports: [SharedModule],
  standalone: true
})
export class FeatureCurationsComponent implements AfterViewInit {
  featureCurations$: Observable<FeatureCurationsCard[]>;

  @ViewChild('featureCurationsSlider', { static: false }) sliderRef!: ElementRef;
  @ViewChild('prevBtn', { static: false }) prevBtnRef!: ElementRef;
  @ViewChild('nextBtn', { static: false }) nextBtnRef!: ElementRef;

  constructor(
    private featureCurationsService: FeatureCurationsService,
    private domUtil: DomUtilsService
  ) {
    this.featureCurations$ = this.featureCurationsService.getCurations();
  }

  ngAfterViewInit(): void {
    this.domUtil.runInBrowser(() => {
      new Swiper(this.sliderRef.nativeElement, {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        modules: [Navigation, Scrollbar],
        navigation: {
          nextEl: this.nextBtnRef.nativeElement,
          prevEl: this.prevBtnRef.nativeElement,
        },
        scrollbar: {
          el: this.sliderRef.nativeElement.querySelector('.swiper-scrollbar'),
          draggable: true,
        },
        breakpoints: {
          1200: { slidesPerView: 4, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 5 },
        },
      });
    });
  }
}
