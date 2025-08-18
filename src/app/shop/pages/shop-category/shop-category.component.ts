import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ICategory } from '../../../shared/types/category-type';
import category_data from '../../../shared/data/category-data';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
  imports: [SharedModule, FooterComponent, BreadcrumbOneComponent, FashionHeaderComponent]
})
export class ShopCategoryComponent {
  public category_data: ICategory[] = category_data;
  constructor(private router: Router) { }
  handleCategory(parent: string) {
    const category = parent.toLowerCase().split(' ').join('-');
    this.router.navigate(['/shop'], {
      queryParams: { category: category },
    });
    console.log('Navigating to shop with category:', category);
  }
}
