import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  isListExist: boolean = true;
  constructor(public service: ProductService, private userService: UserService) { }

  ngOnInit(): void {
    console.log("UID:", this.userService.formData[0]?.UId)
    if (this.userService.formData[0]?.UId) {
        this.service.refreshSellerList();
    }
    else {
      this.isListExist = false;
    }
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
