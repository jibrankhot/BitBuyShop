import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { HeroBannerTwoComponent } from "../../shared/components/hero-banner/hero-banner-two/hero-banner-two.component";
import { FashionCategoryComponent } from "../../shared/components/category/fashion-category/fashion-category.component";
import { FashionPopularProductsComponent } from "../../shop/product/fashion/fashion-popular-products/fashion-popular-products.component";
import { FashionAllProductsComponent } from "../../shop/product/fashion/fashion-all-products/fashion-all-products.component";
import { FashionFeaturedProductsComponent } from "../../shop/product/fashion/fashion-featured-products/fashion-featured-products.component";
import { FashionNewTrendingItemsComponent } from "../../shop/product/fashion/fashion-new-trending-items/fashion-new-trending-items.component";
import { FashionBestSellItemsComponent } from "../../shop/product/fashion/fashion-best-sell-items/fashion-best-sell-items.component";
import { FashionTestimonialComponent } from "../../shared/components/testimonial/fashion-testimonial/fashion-testimonial.component";
import { FashionBlogAreaComponent } from "../../shared/components/blog/fashion/fashion-blog-area/fashion-blog-area.component";
import { FeatureTwoComponent } from "../../shared/components/feature/feature-two/feature-two.component";
import { InstagramAreaTwoComponent } from "../../shared/components/instagram/instagram-area-two/instagram-area-two.component";
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss'],
  imports: [SharedModule, FashionHeaderComponent, HeroBannerTwoComponent, FashionCategoryComponent, FashionPopularProductsComponent, FashionAllProductsComponent, FashionFeaturedProductsComponent, FashionNewTrendingItemsComponent, FashionBestSellItemsComponent, FashionTestimonialComponent, FashionBlogAreaComponent, FeatureTwoComponent, InstagramAreaTwoComponent, FooterTwoComponent]
})
export class FashionComponent {
  @Input() style_2: Boolean | undefined;
  @Input() primary_style: Boolean | undefined;
  @Input() style_3: Boolean | undefined;
}
