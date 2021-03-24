import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public response: {dbPath: ''};
  public imgPath: any;
  public HeadTitle:string='';
  constructor(public service: ProductService) { }

  ngOnInit(): void {
    if (this.service.formData.PId == 0)
    this.HeadTitle= "Add Product"
    else
    this.HeadTitle= "Edit Product"
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Product();
  }
  
  onSubmit(form: NgForm) {
    if (this.service.formData?.PId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm): void {
    console.log( "In onSubmit: ",form.valid);
    this.service.postProduct(form.value, this.imgPath).subscribe(
      result => {this.resetForm(form);
       console.log('success: ', result);
      },
      error => console.log('error: ', error)
    );
  }
  updateRecord(form: NgForm) {
    this.service.putProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  //image upload
  public uploadFinished = (event) => {
    this.response = event;
    this.imgPath= this.response.dbPath
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:2805/${serverPath}`;
  }
}
