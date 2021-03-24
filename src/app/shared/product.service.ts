import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { OrderProduct } from './order-product.model';
import { AuthService } from './auth.service';

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
  filteredList: any[]= [];

  
  constructor(private http: HttpClient, public userService: UserService,public authService: AuthService) { }

  getSellersProduct(UId: number){
    return this.http.get(`${this.rootURL}/SellerProducts/${UId}`);
  }
  
  public createImgPath = (serverPath: string) => {
    return `http://localhost:2805/${serverPath}`;
  }

  postProduct(formData: Product, ImagePath) {
    formData.UserId = 1;
    //formData.SellerId = this.userService.formData[0]?.UId;
    formData.ImagePath = ImagePath;
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
  fillFilteredList(){
    this.filteredList = this.list.filter(product => product.IsSold === false);
    console.log("filtered list: ", this.filteredList);
  }

  refreshSellerList() {
    return this.http.get(`${this.rootURL}/SellerProducts/${this.authService.currentUser?.Id}`)
    .toPromise()
    .then(res =>this.sellerList = res as Product[]);
  }
  
}
