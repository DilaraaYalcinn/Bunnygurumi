import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { list, remove, total, quantity } from 'cart-localstorage'
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  currentUser = this.userService.formData;
  productsInTheCard: any[] = [];
  constructor(private userService: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    console.log("servisteki deger: ", this.userService.formData)

    this.productsInTheCard = list();
    console.log("card length: ", this.productsInTheCard.length)
  }
  
  /*go to top */
  isShow: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  /*end of go to top declarations */

  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
