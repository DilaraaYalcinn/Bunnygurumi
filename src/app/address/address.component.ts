import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public adress: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onClick(form) {
    // console.log("form ",form)
    // var inputValue = (<HTMLInputElement>document.getElementById(address)).value;
  }

}
