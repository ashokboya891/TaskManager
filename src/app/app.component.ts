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
  ngOnInit(): void {
    // this.onSearchClick();
  }

  onSearchClick() {
    console.log('Search clicked for user:', this.loginService.currentUserName);
    // Implement search functionality here
  }
}
