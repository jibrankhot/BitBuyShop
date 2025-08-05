
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { ProductService } from '../../../../shared/services/product.service';
import { ProductSmItemComponent } from "../product-sm-item/product-sm-item.component";

@Component({
  selector: 'app-electronic-sm-products',
  templateUrl: './electronic-sm-products.component.html',
  styleUrls: ['./electronic-sm-products.component.scss'],
  standalone: true,
  imports: [SharedModule, ProductSmItemComponent]
})
export class ElectronicSmProductsComponent {
  // electronic prd
  public electronic_prd: IProduct[] = [];

  // discount_products
  public discount_products: IProduct[] = [];
  // featured_products
  public featured_products: IProduct[] = [];
  // featured_products
  public selling_products: IProduct[] = [];

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      const electronic_products = products.filter((p) => p.productType === 'electronics')
      this.electronic_prd = electronic_products;
      this.discount_products = electronic_products.filter((p) => p.discount > 0).slice(0, 3);
      this.featured_products = electronic_products.filter((p) => p.featured).slice(0, 3);
      this.selling_products = electronic_products.slice().sort((a, b) => b.sellCount - a.sellCount).slice(0, 3);
    });
  }
}
