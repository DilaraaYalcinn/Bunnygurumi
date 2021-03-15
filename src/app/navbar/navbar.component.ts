import { Component, OnInit } from '@angular/core';
import { list, remove, total, quantity } from 'cart-localstorage'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productsInTheCard: any[]= [];
  amount= 0;
  constructor() { }

  ngOnInit(): void {
    //sepet yanında ürün sayısını gösterme
    this.productsInTheCard = list();
    this.productsInTheCard.forEach(product => {
      this.amount += product.quantity;
    })
  }
}
