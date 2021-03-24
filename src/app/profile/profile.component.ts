import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;

  public FirstName;
  public LastName;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        this.service.currentUser = res;
        let splittedName = this.userDetails?.FullName.split(" ");
        this.FirstName = splittedName[0];
        this.LastName = splittedName[1];
      },
      err => {
        console.log(err);
      },
    );
  }
}
