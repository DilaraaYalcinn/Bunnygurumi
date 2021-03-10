import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Product) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  resetForm() {
    this.service.formData = new Product();
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProduct(id)
        .subscribe(response => {
          this.service.refreshList();
        },
        error => { console.log(error); })
    }
  }

}
