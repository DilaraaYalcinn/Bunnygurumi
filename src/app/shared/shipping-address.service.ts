import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Product } from './product.model';
import { ShippingAddress } from './shipping-address.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

  readonly rootURL = "http://localhost:2805/api";
  formData: ShippingAddress= new ShippingAddress();

  constructor(private http: HttpClient, public authService: AuthService) { }

  postAddress(formData: ShippingAddress) {
    formData.CustomerId = this.authService.currentUser?.Id ? this.authService.currentUser?.Id  : '';
    return this.http.post(this.rootURL + '/ShippingAddress', formData);
  }
}
