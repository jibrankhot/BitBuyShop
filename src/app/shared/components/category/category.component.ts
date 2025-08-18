import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import category_data from '../../data/category-data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [SharedModule]
})
export class CategoryComponent {
  categoryItems = category_data.filter((c) => c.productType === "fashion");

  constructor(private router: Router) { }

  handleParentCategory(value: string) {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/shop'], { queryParams: { category: newCategory } });
  }
}
