import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';


@Component({
    selector: 'app-pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Products List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;

    _filterText: string;
    get filterText(): string {
        return this._filterText;
    }

    set filterText(value: string) {
        this._filterText = value;
        this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor (private productService: ProductService) { }

    ngOnInit(): void {
        console.log('On Init...');
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter( (product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImages(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
