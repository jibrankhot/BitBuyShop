import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { Company } from '../../../assets/data/companydata/company.model';
import { CompanyService } from '../../../assets/data/companydata/company.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [SharedModule, SocialLinksComponent],
  standalone: true
})
export class FooterComponent implements OnInit {
  @Input() style_2: Boolean = false;
  @Input() primary_style: Boolean = false;
  @Input() style_3: Boolean = false;
  company!: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.company = data[0];
    });
  }

  getYear() {
    return new Date().getFullYear();
  }
}
