import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { OrderProduct } from './order-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData: Product= new Product(); 
  productDetailData: Product= new Product();
  readonly rootURL = "http://localhost:2805/api";
  list: Product[] = [];
  sellerList: Product[] = [];
  orderProductIdList:number[] = [];

  constructor(private http: HttpClient, public userService: UserService) { }

  getSellersProduct(UId: number){
    return this.http.get(`${this.rootURL}/SellerProducts/${UId}`);
  }
  
  postProduct(formData: Product) {
    formData.SellerId = this.userService.formData[0]?.UId;
    return this.http.post(this.rootURL + '/Product', formData);
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

  refreshList() {
    return this.http.get(this.rootURL + '/Product')
    .toPromise()
    .then(res =>this.list = res as Product[]);
  }
  
  refreshSellerList() {
    return this.http.get(`${this.rootURL}/SellerProducts/${this.userService.formData[0]?.SId}`)
    .toPromise()
    .then(res =>this.sellerList = res as Product[]);
  }
  
}
