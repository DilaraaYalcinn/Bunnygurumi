import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  constructor() { }

 /* postOrder(product: Product) {
    formData.CustomerId = this.userService.formData[0]?.UId;
    formData.IsPaymentSuccessful= true;
    formData.Status= 1;
    formData.Address= "my static Adress";
    return this.http.post(this.rootURL + '/Order', formData);
  } */
}
