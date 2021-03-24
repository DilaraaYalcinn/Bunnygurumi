import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'bunny-product-table',
  templateUrl: './bunny-product-table.component.html',
  styleUrls: ['./bunny-product-table.component.css']
})
export class BunnyProductTableComponent implements OnInit {

  @Input() bun_product_list : Product[];
  @Output() bun_product_delete = new EventEmitter();
  @Output() bun_populate_product_form = new EventEmitter();
  @Output() bun_reset_product_form = new EventEmitter();
  public tableHeaders = { Title: "Title", Explanation: "Explanation", Price: "Price" };

  constructor() { }

  ngOnInit(): void {
    console.log("list: ", this.bun_product_list)
  }

  handleOnDelete(value) {
    this.bun_product_delete.emit(value);
  }

  handlePopulateProductForm(value) {
    this.bun_populate_product_form.emit(value);
  }

  handleResetProductForm() {
    this.bun_reset_product_form.emit();
  }
}
