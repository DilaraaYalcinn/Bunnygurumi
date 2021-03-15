import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Product } from './product.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly rootURL = "http://localhost:2805/api";

  constructor(private http: HttpClient, public userService: UserService) { }

  
  postOrder() {
    var formData: Order = new Order();
    formData.CustomerId = this.userService.formData[0]?.UId;
    formData.IsPaymentSuccessful= true;
    formData.Status= 1;
    formData.Address= "my static Adress";
    return this.http.post(this.rootURL + '/Order', formData);
  }
}
