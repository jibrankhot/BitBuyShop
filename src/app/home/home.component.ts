import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FashionHeaderComponent } from "../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { HeroBannerComponent } from "../shared/components/hero-banner/hero-banner.component";
import { RecommendedProductsComponent } from '../../workspaces/RecommendedProducts/recommendedproducts';
import { FooterComponent } from '../shared/footer/footer.component';
import { FeatureCurationsComponent } from '../../workspaces/FeatureCurations/featurecurations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule, FashionHeaderComponent, HeroBannerComponent,
    // CategoryComponent,
    RecommendedProductsComponent,
    // AllProductsComponent, FeaturedProductsComponent,
    // TrendingItemsComponent, BestSellingItemsComponent,
    // TestimonialComponent, FeatureComponent, InstagramAreaComponent,
    FooterComponent, FeatureCurationsComponent]
})
export class HomeComponent {
  @Input() style_2: Boolean | undefined;
  @Input() primary_style: Boolean | undefined;
  @Input() style_3: Boolean | undefined;
}
