import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CompanyLink } from '../../../assets/data/companydata/company.model';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
  imports: [SharedModule],
  standalone: true
})
export class SocialLinksComponent {
  @Input() links: CompanyLink[] = [];

  getIconClass(label: string): string {
    switch (label.toLowerCase()) {
      case 'facebook': return 'fa-brands fa-facebook-f';
      case 'twitter': return 'fa-brands fa-twitter';
      case 'instagram': return 'fa-brands fa-instagram';
      case 'linkedin': return 'fa-brands fa-linkedin-in';
      case 'vimeo': return 'fa-brands fa-vimeo-v';
      default: return 'fa-solid fa-link';
    }
  }
}
