import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public response: { dbPath: '' };
  isFailed: boolean = false;

  constructor(public service: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.service.getUser(form.value.Username).subscribe(
      result => {
        console.log('success: ', result);
        var a = result as User;
        this.isFailed = false;
        this.service.formData = a;
        this.router.navigateByUrl('/products');
      },
      error => {
        console.log('error: ', error);
        this.isFailed = true;
      }
    );
  }
}
