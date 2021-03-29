import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Order } from './order.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly rootURL = "http://localhost:2805/api";

  constructor(private http: HttpClient, public authService: AuthService) { }

  
  postOrder() {
    var formData: Order = new Order();
    formData.CustomerId = this.authService.currentUser?.Id ? this.authService.currentUser?.Id  : '';
    formData.IsPaymentSuccessful= true;
    formData.Status= 1;
    formData.Address= "my static Adress";
    return this.http.post(this.rootURL + '/Order', formData);
  }
}
