import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
declare var $: any;
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles: [
    `.modal{background: rgba(0,0,0, .5);`
  ]
})
export class ProductAddComponent implements OnInit {
  public response: { dbPath: '' };
  public imgPath: any;
  display = "none";
  constructor(public service: ProductService,private toastr: ToastrService) { }
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
    console.log("In onSubmit: ", form.valid);
   // if(this.imgPath)
    console.log("form: ", form);
     // this.service.formData.ImagePath = this.imgPath;
    this.service.postProduct(form.value, this.imgPath).subscribe(
      (result) => {
        console.log('success deneme: ', result);
        this.toastr.success('Successfully Added.');
        this.resetForm(form);
      },
      error => this.toastr.success('Something Went Wrong.')
    );
  }
  updateRecord(form: NgForm) {
    this.service.putProduct().subscribe(
      (res) => {
        console.log('success up: ', res);
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Successfully Updated.');
      },
      err => {
        console.log(err);
      }
    )
  }
  //image upload
  public uploadFinished = (event) => {
    this.response = event;
    this.imgPath = this.response.dbPath
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:2805/${serverPath}`;
  }
}
