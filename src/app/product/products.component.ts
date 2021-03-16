import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { list, remove, total, quantity } from 'cart-localstorage'
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  currentUser =this.userService.formData;
  productsInTheCard: any[]= [];
  constructor(private userService: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    console.log("servisteki deger: ", this.userService.formData)
    
    this.productsInTheCard =list();
    console.log("card length: ",this.productsInTheCard.length)
  }

}
