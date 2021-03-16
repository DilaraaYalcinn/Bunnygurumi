import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShippingAddressService } from '../shared/shipping-address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public adress: string = '';
  constructor( public service: ShippingAddressService) { }

  ngOnInit(): void {
  }
  onClick(form: NgForm) {
    this.service.postAddress(form.value).subscribe(
      result => {
        console.log('success: ', result);
      },
      error => console.log('error: ', error)
    );
    // console.log("form ",form)
    // var inputValue = (<HTMLInputElement>document.getElementById(address)).value;
  }

}
