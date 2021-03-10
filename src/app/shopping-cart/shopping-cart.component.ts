import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { list, remove, total, quantity } from 'cart-localstorage'
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productList: Product[] = [];
  totalPrice:number = 0;
  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.productList = list();
    this.totalPrice= total()
  }
  refreshCartList() {
    list()
  }
  
  onDelete(id: number) {
    if (confirm('Are you sure to remove this product from the cart?')) {
      remove(id);
      this.refreshCartList();
    }
  }
  onMinus(id:number){
    quantity(id,-1) 
  }

  onPlus(id:number){
    quantity(id,+1) 
  }

}
