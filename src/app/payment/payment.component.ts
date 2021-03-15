import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { ProductService } from '../shared/product.service';

import { list, remove, total, quantity } from 'cart-localstorage'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public service: OrderService, public productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.productService.orderList.forEach
    this.service.postOrder().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  } 

}
