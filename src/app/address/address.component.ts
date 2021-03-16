import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShippingAddressService } from '../shared/shipping-address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public adress: string = '';
  constructor(public service: ShippingAddressService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
  }
  onClick(form: NgForm) {
    if (form.valid) {
      this.service.postAddress(form.value).subscribe(
        result => {
          console.log('success: ', result);
          this.router.navigate(['payment']);
        },
        error => console.log('error: ', error)
      );
    } else{
      console.log("Boş alanlar var");
      this.toastr.error("Please fill the required fields", "*");
    }
    
    // console.log("form ",form)
    // var inputValue = (<HTMLInputElement>document.getElementById(address)).value;
  }

}
