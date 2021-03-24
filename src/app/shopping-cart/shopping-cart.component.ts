import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { list, remove, total, quantity } from 'cart-localstorage'
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { OrderProduct } from '../shared/order-product.model';
import { OrderService } from '../shared/order.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public productList: Product[] = []; 
  public orderProduct: OrderProduct;
  public orderProductList: OrderProduct[] = [];
  public totalPrice:number = 0;
  public IsContinue: boolean = false;
  tableHeaders = {Title: 'Title', Price: 'Price', Quantity: 'Quantity'}

  constructor(public service: ProductService,public orderService: OrderService) { }

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
    this.refreshCartList();
  }

  onPlus(id:number){
    quantity(id,+1) 
    list();
  }

  handleClick(){
    this.service.orderProductIdList = this.productList.map(p => p.PId);
    this.orderProduct = new OrderProduct();
    this.orderProduct.ProductId = this.productList[0].PId;
    //this.IsContinue=true
  }

  onContinue(product: Product){
    this.IsContinue=true
  }

}
