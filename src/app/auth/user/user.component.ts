import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public response: { dbPath: '' };
  isFailed: boolean = false;

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.service.getUser(form.value.Username).subscribe(
      result => {
        console.log('success: ', result);
      },
      error => {
        console.log('error: ', error);
        this.isFailed = true;
      }
    );
  }
}
