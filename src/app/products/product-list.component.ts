
import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({

    selector: "pm-products",
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'cart';

    _listFilter: string;
    errorMessage: any;

    get listFilter(): string {

        return this._listFilter;
    }

    set listFilter(value: string) {

        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

    }

    filteredProducts: Iproduct[];
    products;
    //products: any[] = [

    //     {
    //         "productId": 2,
    //         "productName": "Garden Cart",
    //         "productCode": "GDN-0023",
    //         "releaseDate": "March 18, 2018",
    //         "description": "15 gallon capacity rolling garden cart",
    //         "price": "32.99",
    //         "starRating": "4.2",
    //         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //     },
    //     {
    //         "productId": 5,
    //         "productName": "Hammer",
    //         "productCode": "TBX-0048",
    //         "releaseDate": "May 21, 2016",
    //         "description": "Curved claw steel hammer",
    //         "price": 8.9,
    //         "starRating": 4.8,
    //         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //     }

    // ];

    //The below is the implementation of the Interface exprorted from 'product.ts' file.

    // products: Iproduct[] = [

    //     {
    //         "productId": 2,
    //         "productName": "Garden Cart",
    //         "productCode": "GDN-0023",
    //         "releaseDate": "March 18, 2018",
    //         "description": "15 gallon capacity rolling garden cart",
    //         "price": 32.99,
    //         "starRating": 4.2,
    //         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //     },
    //     {
    //         "productId": 5,
    //         "productName": "Hammer",
    //         "productCode": "TBX-0048",
    //         "releaseDate": "May 21, 2016",
    //         "description": "Curved claw steel hammer",
    //         "price": 8.9,
    //         "starRating": 4.8,
    //         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //     }

    // ];

    constructor(private ProductService: ProductService) {

        //this.listFilter = 'cart';

        // var testValue = "my Test Value";

        // console.log('The index value is ' + testValue.indexOf('x'));

    }

    performFilter(filterBy: string): Iproduct[] {

        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: Iproduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

    }

    //****************** Javascript equivalent of the above implementation******************************
    //
    // ProductListComponent.prototype.performFilter = function (filterBy) {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.products.filter(
    // function (product) { 
    //     return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1; 
    // });
    // };

    toggleImage(): void {

        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

        console.log('On OnInit');
        this.products = this.ProductService.getProducts().subscribe(
            products => {
            this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );

    }

    onRatingClicked(message: string): void {

        this.pageTitle = "Product List" + ' ' + message;

    }

}