import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../../shared/types/product-type';
import { ProductService } from '../../../shared/services/product.service';
import { RelatedProductsComponent } from "../../product/related-products/related-products.component";
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ProductDetailsTabNavComponent } from "../../../shared/components/product-details-com/product-details-tab-nav/product-details-tab-nav.component";
import { ProductDetailsWrapperComponent } from "../../../shared/components/product-details-com/product-details-wrapper/product-details-wrapper.component";
import { ProductDetailsThumbComponent } from "../../../shared/components/product-details-com/product-details-thumb/product-details-thumb.component";
import { ShopDetailsBreadcrumbComponent } from "../../../shared/components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";


@Component({
  selector: 'app-product-details-with-video',
  templateUrl: './product-details-with-video.component.html',
  styleUrls: ['./product-details-with-video.component.scss'],
  imports: [SharedModule, RelatedProductsComponent, FooterComponent, ProductDetailsTabNavComponent, ProductDetailsWrapperComponent, ProductDetailsThumbComponent, ShopDetailsBreadcrumbComponent, FashionHeaderComponent]
})
export class ProductDetailsWithVideoComponent {
  public product!: IProduct;

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products.find(p => p.videoId)!;
    });
  }

}
