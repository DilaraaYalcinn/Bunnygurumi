import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
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
  constructor(public service: ProductService, private userService: UserService, private authService: AuthService) { }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:2805/${serverPath}`;
  }
  
  ngOnInit(): void {
    if (this.authService.currentUser?.Id) {
      this.service.refreshSellerList();
    }
    else {
      this.isListExist = false;
    }
  }

  populateProductForm(selectedRecord: Product) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  resetProductForm() {
    this.service.formData = new Product();
  }

  productDelete(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProduct(id)
        .subscribe(response => {
          this.service.refreshSellerList();
        },
          error => { console.log(error); })
    }
  }

}
