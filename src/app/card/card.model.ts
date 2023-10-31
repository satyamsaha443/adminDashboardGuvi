export class Card{
    public title: string;
    public amount: number;
    public percentage: string;
    public time_period: string;
    public status: string;
    constructor(title: string, amount: number, percentage: string, time_period: string, status: string){
        this.time_period = time_period
        this.title = title
        this.percentage = percentage
        this.amount = amount
        this.status = status
    }
}