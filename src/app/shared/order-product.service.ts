import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderProduct } from './order-product.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  readonly rootURL = "http://localhost:2805/api";
  constructor(private http: HttpClient) { }

  postOrderProduct(product: OrderProduct) {
    return this.http.post(this.rootURL + '/Order_Product', product);
  }
}
