import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BackToTopComponent {
  showBackToTopBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 200) {
      this.showBackToTopBtn = true;
    }
    else {
      this.showBackToTopBtn = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
