import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(public loginService: LoginService)
  {
  }
  ngOnInit() {
    // Check if the user is logged in on app initialization
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.loginService.currentUserName = user.email; // or however you want to store the username
    }
  }
  onSearchClick() {
    console.log('Search clicked for user:', this.loginService.currentUserName);
    // Implement search functionality here
  }
}
