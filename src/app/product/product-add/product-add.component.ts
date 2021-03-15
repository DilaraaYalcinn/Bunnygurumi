import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
declare var $ : any;
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles:[
    `.modal{background: rgba(0,0,0, .5);`
  ]
})
export class ProductAddComponent implements OnInit {
  public response: {dbPath: ''};
  public imgPath: any;
  display = "none";
  constructor(public service: ProductService) { }
  ngOnInit() {
   }
openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Product();
  }
  
  onSubmit(form: NgForm) {  
    // if(this.service.userService?.formData[0]?.UId)
    //   form.form.s= this.service.userService?.formData[0]?.UId;
    if (this.service.formData.PId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm): void {
    console.log( "In onSubmit: ",form.valid);
    this.service.postProduct(form.value).subscribe(
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
