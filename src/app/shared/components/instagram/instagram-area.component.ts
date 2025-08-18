import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-instagram-area',
  templateUrl: './instagram-area.component.html',
  styleUrls: ['./instagram-area.component.scss'],
  imports: [SharedModule]
})
export class InstagramAreaComponent {

  public instagram_data = [
    { id: 1, link: "https://www.instagram.com/", img: '/assets/img/instagram/2/insta-1.jpg' },
    { id: 2, link: "https://www.instagram.com/", img: '/assets/img/instagram/2/insta-2.jpg' },
    { id: 3, link: "https://www.instagram.com/", banner: true, img: '/assets/img/instagram/2/insta-icon.png' },
    { id: 4, link: "https://www.instagram.com/", img: '/assets/img/instagram/2/insta-3.jpg' },
    { id: 5, link: "https://www.instagram.com/", img: '/assets/img/instagram/2/insta-4.jpg' },
  ]
}
