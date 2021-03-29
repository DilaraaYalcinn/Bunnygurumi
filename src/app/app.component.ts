import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bunnygurumi';
  
  constructor(public service: AuthService) { }

  ngOnInit() {
    this.getUserData();
  }
  onActivate(event) {
    window.scroll(0, 0);
  }

  getUserData() {
    this.service.getUserProfile().subscribe(
      res => {
        this.service.currentUser = res;
      },
      err => {
        console.log(err);
      },
    );
  }
}
