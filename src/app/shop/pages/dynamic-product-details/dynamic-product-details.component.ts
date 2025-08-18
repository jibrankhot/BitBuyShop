import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../../shared/types/product-type';
import { ProductService } from '../../../shared/services/product.service';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RelatedProductsComponent } from "../../product/related-products/related-products.component";
import { ProductDetailsTabNavComponent } from "../../../shared/components/product-details-com/product-details-tab-nav/product-details-tab-nav.component";
import { ProductDetailsWrapperComponent } from "../../../shared/components/product-details-com/product-details-wrapper/product-details-wrapper.component";
import { ProductDetailsThumbComponent } from "../../../shared/components/product-details-com/product-details-thumb/product-details-thumb.component";
import { ShopDetailsBreadcrumbComponent } from "../../../shared/components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
  selector: 'app-dynamic-product-details',
  templateUrl: './dynamic-product-details.component.html',
  styleUrls: ['./dynamic-product-details.component.scss'],
  imports: [SharedModule, FooterComponent, RelatedProductsComponent, ProductDetailsTabNavComponent, ProductDetailsWrapperComponent, ProductDetailsThumbComponent, ShopDetailsBreadcrumbComponent, FashionHeaderComponent]
})
export class DynamicProductDetailsComponent implements OnInit {
  public product: IProduct | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id');
        if (productId) {
          return this.productService.getProductById(productId);
        }
        return of<IProduct | null>(null); // Emit null if there's no productId
      })
    ).subscribe((product: IProduct | null | undefined) => {
      if (!product) {
        // Product not found, navigate to 404 page
        this.router.navigate(['/404']);
      } else {
        this.product = product;
      }
    });
  }
}
