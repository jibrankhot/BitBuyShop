import { Router } from '@angular/router';
import { Component, HostListener, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SharedModule } from '../../../shared.module';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { UtilsService } from '../../services/utils.service';
import { MenuBarComponent } from "../header-com/menu-bar/menu-bar.component";
import { CartSidebarComponent } from "../../components/offcanvas/cart-sidebar/cart-sidebar.component";
import { MobileSidebarComponent } from "../../components/offcanvas/mobile-sidebar/mobile-sidebar.component";

import { Company } from '../../../../assets/data/companydata/company.model';
import { CompanyService } from '../../../../assets/data/companydata/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fashion-header',
  templateUrl: './fashionheadercomponent.html',
  styleUrls: ['./fashionheadercomponent.scss'],
  imports: [SharedModule, MenuBarComponent, CartSidebarComponent, MobileSidebarComponent]
})
export class FashionHeaderComponent {
  @Input() style_2: boolean = false;
  isProfileOpen = false;
  public searchText: string = '';
  public sticky: boolean = false;
  public isMobile: boolean = false;

  public company: Company = {
    logo: {
      src: '',
      link: '/'
    },
    contact: {
      phone: '',
      email: '',
      address: '',
      addressLink: ''
    },
    sections: [],
    subscribe: {
      title: '',
      description: ''
    },
    social: {
      title: '',
      links: []
    },
    bottom: {
      copyright: '',
      paymentImg: '',
      paymentAlt: ''
    },
    companyName: ''
  };

  private isBrowser: boolean;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router,
    private toastr: ToastrService,
    private companyService: CompanyService,

    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 992;
    }
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      if (data && data.length > 0) {
        this.company = data[0];
      }
    });
  }

  logout() {
    // Clear login session
    sessionStorage.removeItem('isLoggedIn');
    this.toastr.success('Logged out successfully!');
    this.router.navigate(['/pages/login']); // Redirect to login page
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (this.isBrowser) {
      this.sticky = window.scrollY > 80;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 992;
    }
  }

  handleSearchSubmit() {
    if (!this.searchText) return;
    this.router.navigate(['/pages/search'], {
      queryParams: { searchText: this.searchText }
    });
  }
}
