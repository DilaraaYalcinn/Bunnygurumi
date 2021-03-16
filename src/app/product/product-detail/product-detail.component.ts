import { Component, destroyPlatform, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { add, total,destroy } from 'cart-localstorage'
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public selectedProduct: any

  constructor(private service: ProductService, private root: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail() {
    this.service.getProduct(+this.root.snapshot.params['id']).subscribe(
      res => {
        this.selectedProduct = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  public addToCart(): void {
    add({ id: this.selectedProduct.PId, name: this.selectedProduct.Title, price: this.selectedProduct.Price })
    this.toastr.success('Sepete Eklendi!', '', {timeOut: 1000});
    // add({ id: 2, name: "Product 2", price: 5 }, 2)

    // console.log(total())
    // output: 300
  }

}
