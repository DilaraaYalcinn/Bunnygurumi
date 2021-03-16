import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ShippingAddress } from './shipping-address.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

  readonly rootURL = "http://localhost:2805/api";
  formData: ShippingAddress= new ShippingAddress();

  constructor(private http: HttpClient, public userService: UserService) { }

  postAddress(formData: ShippingAddress) {
    return this.http.post(this.rootURL + '/ShippingAddress', formData);
  }
}
