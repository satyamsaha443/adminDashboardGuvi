import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  selectedProduct: Product
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.selectedProduct = this.productService.getProduct(Number(id))
    this.route.params.subscribe((params: Params) => {
      this.selectedProduct = this.productService.getProduct(Number(params['id']))
    })
  }
}
