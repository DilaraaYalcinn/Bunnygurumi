export class Order {
    OId: number= 0;
    CustomerId: string= '';
    ProductId: number= 0;
    OrderDate?: Date;
    Status: number=0;
    Address: string='';
    IsPaymentSuccessful : boolean= false;
}
