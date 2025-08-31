import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FashionHeaderComponent } from "../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { HeroBannerComponent } from "../shared/components/hero-banner/hero-banner.component";
import { AllProductsComponent } from "../shop/product/fashion/all-products/all-products.component";
import { FeaturedProductsComponent } from "../shop/product/fashion/featured-products/featured-products.component";
import { TrendingItemsComponent } from "../shop/product/fashion/trending-items/trending-items.component";
import { BestSellingItemsComponent } from "../shop/product/fashion/best-selling-items/best-selling-items.component";
import { TestimonialComponent } from "../shared/components/testimonial/testimonial.component";
import { FeatureComponent } from "../shared/components/feature/feature.component";
import { InstagramAreaComponent } from "../shared/components/instagram/instagram-area.component";
import { FooterComponent } from '../shared/footer/footer.component';
import { CategoryComponent } from '../shared/components/category/category.component';
import { RecommendedProductsComponent } from '../shop/product/fashion/recommended-products/recommended-products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule, FashionHeaderComponent, HeroBannerComponent,
    CategoryComponent, RecommendedProductsComponent,
    // AllProductsComponent, FeaturedProductsComponent,
    // TrendingItemsComponent, BestSellingItemsComponent,
    // TestimonialComponent, FeatureComponent, InstagramAreaComponent,
    FooterComponent]
})
export class HomeComponent {
  @Input() style_2: Boolean | undefined;
  @Input() primary_style: Boolean | undefined;
  @Input() style_3: Boolean | undefined;
}
