import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  @Input() public routeToShop :boolean= false;

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
