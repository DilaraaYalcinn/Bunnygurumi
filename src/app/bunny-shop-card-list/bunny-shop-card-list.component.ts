import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { add, total, destroy } from 'cart-localstorage'

@Component({
  selector: 'bunny-shop-card-list',
  templateUrl: './bunny-shop-card-list.component.html',
  styleUrls: ['./bunny-shop-card-list.component.css']
})
export class BunnyShopCardListComponent implements OnInit {

  public selectedProduct: any
  @Input() productList: Product[];
  @Output() addToCartClicked= new EventEmitter();
  
  constructor(public service: ProductService, private root: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("productList: ", this.productList);
  }

  handleAddToCartClicked(product){
    this.addToCartClicked.emit(product);
  }
}
