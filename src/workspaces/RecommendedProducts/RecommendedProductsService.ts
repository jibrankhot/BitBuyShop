import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../../app/shared/types/product-type';
import recommendedProducts from './RecommendedProductsData';

@Injectable({
    providedIn: 'root'
})
export class RecommendedProductsService {
    private productsData: IProduct[] = recommendedProducts;
    public filter_offcanvas: boolean = false;

    constructor() { }

    activeImg: string | undefined;

    handleImageActive(img: string) {
        this.activeImg = img;
    }

    // Get all recommended products
    public get products(): Observable<IProduct[]> {
        return of(this.productsData);
    }

    // Get product by ID
    public getProductById(id: string): Observable<IProduct | undefined> {
        return this.products.pipe(
            map(items => {
                const product = items.find(p => p.id === id);
                if (product) this.handleImageActive(product.img);
                return product;
            })
        );
    }

    // Filter products by tags
    public filterProducts(filter: any = []): Observable<IProduct[]> {
        return this.products.pipe(
            map(items =>
                items.filter(item => {
                    if (!filter.length) return true;
                    return filter.some((tag: string) => item.tags?.includes(tag));
                })
            )
        );
    }

    // Sort products
    public sortProducts(products: IProduct[], sortBy: string): IProduct[] {
        if (sortBy === 'asc') return [...products].sort((a, b) => a.id.localeCompare(b.id));
        if (sortBy === 'low') return [...products].sort((a, b) => a.price - b.price);
        if (sortBy === 'high') return [...products].sort((a, b) => b.price - a.price);
        if (sortBy === 'on-sale') return products.filter(p => p.discount > 0);
        return products;
    }

    // Max price
    public get maxPrice(): number {
        return Math.max(...this.productsData.map(p => p.price));
    }

    // Pagination helper
    public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
        const totalPages = Math.ceil(totalItems / pageSize);
        const paginateRange = 3;

        if (currentPage < 1) currentPage = 1;
        else if (currentPage > totalPages) currentPage = totalPages;

        let startPage: number, endPage: number;
        if (totalPages <= 5) {
            startPage = 1; endPage = totalPages;
        } else if (currentPage < paginateRange - 1) {
            startPage = 1; endPage = startPage + paginateRange - 1;
        } else {
            startPage = currentPage - 1; endPage = currentPage + 1;
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        const pages = Array.from({ length: (endPage - startPage + 1) }, (_, i) => startPage + i);

        return { totalItems, currentPage, pageSize, totalPages, startPage, endPage, startIndex, endIndex, pages };
    }
}