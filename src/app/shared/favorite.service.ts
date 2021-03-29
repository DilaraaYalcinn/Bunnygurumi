import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Favorite } from './favorite.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  readonly rootURL = "http://localhost:2805/api";

  constructor(private http: HttpClient, private authService: AuthService) { }

  postFavorite(productId : number) {
    var favorite = new Favorite();
    favorite.CustomerId = this.authService.currentUser?.Id ?  this.authService.currentUser.Id : '';
    favorite.ProductId = productId;
    return this.http.post(this.rootURL + '/Favorite', favorite);
  }
}
