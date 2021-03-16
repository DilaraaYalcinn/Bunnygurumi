import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { add, total, destroy } from 'cart-localstorage'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  @Input() public routeToShop: boolean = false;
  public selectedProduct: any
  public IsContinue: boolean = false;
  public doNotShow: boolean = false;

  ProductList: Product[] = [];

  constructor(public service: ProductService, private root: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  doNotShowCheck() {
    //tükenenleri göster butonuna basıldıysa servisteki listeyi filtreleyerek tekrar servisteki listeye ata
    if (!this.doNotShow) {
      this.service.refreshList().then((value) => this.service.list = value.filter(product => product.IsSold === false))
      this.doNotShow = true;
    }else{ // servisteki bütün elemanların old listeyi çağır
      this.service.refreshList();
      this.doNotShow = false;
    }
  }
  getProductDetail(PId: number) {
    this.service.getProduct(PId).subscribe(
      res => {
        this.selectedProduct = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  onAddtoCartClick(product: Product) {
    this.getProductDetail(product.PId);
    add({ id: product.PId, name: product.Title, price: product.Price })
    this.toastr.success('Sepete Eklendi!', '', {timeOut: 1000});
  }
}
