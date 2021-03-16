import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { ProductService } from '../shared/product.service';
import { list, remove, total, quantity } from 'cart-localstorage'
import { OrderProductService } from '../shared/order-product.service';
import { OrderProduct } from '../shared/order-product.model';
import { Order } from '../shared/order.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  orderId: number = 0;
  productsInTheCard: any[] = [];

  constructor(
    public service: OrderService,
    public productService: ProductService,
    public orderProductService: OrderProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.productService.orderList.forEach
    this.service.postOrder().subscribe(
      res => {
        console.log(res);
        let order = res as Order;
        this.orderId = order.OId;
        this.handlePostOrderProduct();
        this.toastr.success("Siparişiniz Başarıyla oluşturuldu.", '#1237278842');
      },
      err => {
        console.log(err);
        this.toastr.error("Bilinmeyen Bir Hata Oluştu.", 'Tekrar Deneyin');
      }
    )
  }

  handlePostOrderProduct() {
    this.productsInTheCard = list();
    this.productsInTheCard.forEach(product => {

      var item: OrderProduct = new OrderProduct();
      item.OrderId = this.orderId;
      item.ProductId = product.id;
      item.Quantity = product.quantity;
      console.log("item:", item);

      this.orderProductService.postOrderProduct(item).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.toastr.error("Bilinmeyen Bir Hata Oluştu.", 'Tekrar Deneyin');
        }
      );
    })
  }

}
