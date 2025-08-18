import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../../shared/types/product-type';
import { ProductService } from '../../../shared/services/product.service';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RelatedProductsComponent } from "../../product/related-products/related-products.component";
import { ProductDetailsTabNavComponent } from "../../../shared/components/product-details-com/product-details-tab-nav/product-details-tab-nav.component";
import { ProductDetailsWrapperComponent } from "../../../shared/components/product-details-com/product-details-wrapper/product-details-wrapper.component";
import { ShopDetailsBreadcrumbComponent } from "../../../shared/components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.scss'],
  imports: [SharedModule, FooterComponent, RelatedProductsComponent, ProductDetailsTabNavComponent, ProductDetailsWrapperComponent, ShopDetailsBreadcrumbComponent, FashionHeaderComponent]
})
export class ProductDetailsListComponent {
  public product!: IProduct;

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products[5];
    });
  }
}
