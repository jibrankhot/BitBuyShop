import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { shopByCategories } from './shopbycategoryData';
import { ShopByCategory } from './shopbycategorymodel';

@Injectable({
    providedIn: 'root'
})
export class ShopByCategoryService {
    private categoriesData: ShopByCategory[] = shopByCategories;
    private activeCategorySubject = new BehaviorSubject<ShopByCategory | null>(null);
    public activeCategory$ = this.activeCategorySubject.asObservable();

    constructor() { }

    // Get all categories
    public get categories(): Observable<ShopByCategory[]> {
        return of(this.categoriesData);
    }

    // Get category by id
    public getCategoryById(id: string): Observable<ShopByCategory | undefined> {
        return of(this.categoriesData.find(cat => cat.id === id));
    }

    // Set active category (for UI selection)
    public setActiveCategory(category: ShopByCategory) {
        this.activeCategorySubject.next(category);
    }

    // Clear active category
    public clearActiveCategory() {
        this.activeCategorySubject.next(null);
    }
}
