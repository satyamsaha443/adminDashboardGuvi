import allProducts from '../assets/json/products.json'
import { Product } from './products/products.model'

export class ProductService{
    private products: Product[] = allProducts
    getProducts(){
        return this.products.slice()
    }
    getProduct(id: number){
        const product = this.products.find(s => {
            return s.id == id
        })
        return product
    }
}