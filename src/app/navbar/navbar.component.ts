import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { list, remove, total, quantity } from 'cart-localstorage'
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productsInTheCard: any[] = [];
  amount = 0;
  
  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
    //sepet yanında ürün sayısını gösterme
    this.productsInTheCard = list();
    this.productsInTheCard.forEach(product => {
      this.amount += product.quantity;
    })
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
