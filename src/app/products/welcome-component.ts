import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from '../shared/product.service';

@Component({
    templateUrl: './welcome-component.html',
    styleUrls: ['./welcome-component.css']
})


export class WelcomeComponent implements OnInit{
    pageTitle: string = 'Welcome';
    product: IProduct;

    constructor(private productService: ProductService){}

    ngOnInit(){
    }
}