import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component ({
    // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pagetitle = 'product list';
    imageWidth = 50;
    imageMargin = 2;
    // tslint:disable-next-line:no-inferrable-types
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }



    filteredProducts: IProduct[];

    products: IProduct [ ]  = [];

    ngOnInit(): void {
        this.productService.getProducts().subscribe (
            products => {
                this.products = products ;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }

    /**
     *
     */
    constructor(private productService: ProductService) {

    }

    onRatingClicked(message: string): void {
        this.pagetitle = 'Product list: ' + message;
    }

    performFilter (filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }


}
