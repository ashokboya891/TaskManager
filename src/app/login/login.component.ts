import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginviewmodel: LoginViewModel = new LoginViewModel();
  loginError:string="";
 

  ngOnInit(): void {

  }
  constructor(private loginservie:LoginService,private routerService:Router) {
  }

  onLoginClick(event: any)
  {
    this.loginservie.Login(this.loginviewmodel).subscribe(
      (response) =>
      {
        localStorage["token"] = response.token;
        this.routerService.navigateByUrl("/myProfile");
      },
      (error) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }
  
}
