import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData: Product= new Product(); 
  productDetailData: Product= new Product();
  readonly rootURL = "http://localhost:2805/api";
  list: Product[] = [];

  constructor(private http: HttpClient) { }

  postProduct(formData: Product) {
    return this.http.post(this.rootURL + '/Product', formData);
  }

  refreshList() {
    return this.http.get(this.rootURL + '/Product')
    .toPromise()
    .then(res =>this.list = res as Product[]);
  }
  
  putProduct() {
    return this.http.put(`${this.rootURL}/Product/${this.formData.PId}`, this.formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.rootURL + '/Product/' +id);
  }
  
  getProduct(id:number) {
    return this.http.get(`${this.rootURL}/Product/${id}`);
  }
  
}
