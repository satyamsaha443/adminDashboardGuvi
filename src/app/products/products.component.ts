import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  showProductList: boolean = true;
  constructor(private productService: ProductService,
              private router: Router,){
                this.products = this.productService.getProducts()
              }
  ngOnInit(): void {
    this.products = this.productService.getProducts()
    if(this.router.url === "/products") this.showProductList = true
    else this.showProductList = false
  }

  onViewProductDetail(id: number){
    console.log("prod details clicked")
    this.router.navigate(['/products', id])
    this.showProductList = false
  }

  onAddProductToCart(id: number){
    console.log("product with id", id, "added to cart!")
  }
}
