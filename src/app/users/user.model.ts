export class User{
    public id: number;
    public first_name: string;
    public email: string;
    public gender: string;
    public address: string;
    public phone: string;
    constructor(id: number, first_name: string, email: string, gender: string, address: string, phone: string){
        this.id = id
        this.first_name = first_name
        this.email = email
        this.gender = gender
        this.address = address
        this.phone = phone
    }
}