export class Product{
    constructor(public id: number, public title: string, public image: string, public price: number, public category: string){
        this.id = id
        this.title = title
        this.category = category
        this.image = image
        this.price = price
    }
}