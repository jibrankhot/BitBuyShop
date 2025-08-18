import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../../shared/types/product-type';
import { ProductService } from '../../../shared/services/product.service';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { NiceSelectComponent } from "../../../shared/ui/nice-select/nice-select.component";
import { ProductItemTwoComponent } from "../../product/fashion/product-item-two/product-item-two.component";
import { ProductListItemComponent } from "../../product/widget/product-list-item/product-list-item.component";
import { PaginationComponent } from "../../../shared/ui/pagination/pagination.component";
import { PriceFilterComponent } from '../../filtering/price-filter/price-filter.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ResetFilterRouteComponent } from "../../filtering/reset-filter-route/reset-filter-route.component";
import { BrandFilterComponent } from "../../filtering/brand-filter/brand-filter.component";
import { TopRatedProductsComponent } from "../../product/widget/top-rated-products/top-rated-products.component";
import { CategoryFilterComponent } from "../../filtering/category-filter/category-filter.component";
import { StatusFilterComponent } from "../../filtering/status-filter/status-filter.component";

@Component({
  selector: 'app-shop-filter-offcanvas',
  templateUrl: './shop-filter-offcanvas.component.html',
  styleUrls: ['./shop-filter-offcanvas.component.scss'],
  imports: [SharedModule, PriceFilterComponent, FashionHeaderComponent, BreadcrumbOneComponent, NiceSelectComponent, ProductItemTwoComponent, ProductListItemComponent, PaginationComponent, FooterComponent, ResetFilterRouteComponent, BrandFilterComponent, TopRatedProductsComponent, CategoryFilterComponent, StatusFilterComponent]
})
export class ShopFilterOffcanvasComponent {

  public products: IProduct[] = [];
  public minPrice: number = 0;
  public maxPrice: number = this.productService.maxPrice;
  public niceSelectOptions = this.productService.filterSelect;
  public brands: string[] = [];
  public category: string | null = null;
  public status: string | null = null;
  public brand: string | null = null;
  public pageNo: number = 1;
  public pageSize: number = 12;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order


  activeTab: string = 'grid';
  handleActiveTab(tab: string) {
    this.activeTab = tab;
  }

  handleFilterOffcanvas() {
    this.productService.filter_offcanvas = !this.productService.filter_offcanvas
  }

  handleFilterOffcanvasClick(event: MouseEvent) {
    // Prevent click event propagation to the overlay when clicking inside the offcanvas
    event.stopPropagation();
  }

  // shop changeFilterSelect
  changeFilterSelect(selectedOption: { value: string, text: string }) {
    this.sortByFilter(selectedOption.value)
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
    public productService: ProductService
  ) {
    // Get Query params..
    this.route.queryParams.subscribe((params) => {
      console.log('params', params);
      this.minPrice = params['minPrice'] ? params['minPrice'] : this.minPrice;
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : this.maxPrice;
      this.brand = params['brand']
        ? params['brand'].toLowerCase().split(' ').join('-') : null;

      this.category = params['category']
        ? params['category'].toLowerCase().split(' ').join('-') : null;
      this.status = params['status']
        ? params['status'].toLowerCase().split(' ').join('-') : null;
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.sortBy = params['sortBy'] ? params['sortBy'] : 'asc';

      // Get Filtered Products..
      this.productService.filterProducts().subscribe((response) => {
        // console.log('res', response);
        // Sorting Filter
        this.products = this.productService.sortProducts(response, this.sortBy);
        console.log('this.products', this.products);

        // Category Filter
        if (this.category) {
          this.products = this.products.filter(
            (p) => p.parent.toLowerCase().split(' ').join('-') === this.category
          );
        }
        // status Filter
        if (this.status) {
          if (this.status === 'on-sale') {
            this.products = this.products.filter((p) => p.discount > 0);
          } else if (this.status === 'in-stock') {
            this.products = this.products.filter((p) => p.status === 'in-stock');
          }
          else if (this.status === 'out-of-stock') {
            this.products = this.products.filter((p) => p.status === 'out-of-stock' || p.quantity === 0);
          }
        }
        // brand filtering
        if (this.brand) {
          this.products = this.products.filter((p) => p.brand.name.toLowerCase() === this.brand);
        }

        // Price Filter
        this.products = this.products.filter(
          (p) => p.price >= Number(this.minPrice) && p.price <= Number(this.maxPrice)
        );
        // Paginate Products
        this.paginate = this.productService.getPager(this.products.length, Number(+this.pageNo), this.pageSize);
        this.products = this.products.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
    });
  }
  ngOnInit() {
    // console.log('pagination',this.paginate)
  }

  // Append filter value to Url
  updateFilter(tags: any) {
    console.log('tags', tags);
    tags.page = null; // Reset Pagination
  }

  // SortBy Filter
  sortByFilter(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value ? value : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  // product Pagination
  setPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  handleResetFilter() {
    this.minPrice = 0;
    this.maxPrice = this.productService.maxPrice;
    this.productService.filter_offcanvas = !this.productService.filter_offcanvas;
    this.router.navigate(['/shop/shop-filter-offcanvas']);
  }
}
