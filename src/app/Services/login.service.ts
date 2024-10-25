import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginViewModel } from '../login-view-model';
import { User } from '../User';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="https://localhost:7018/api/Account";
  currentUserName:any=null;
  private httpClient:HttpClient|null=null;
  constructor(private httpbackend:HttpBackend) { }
  
  // public Login(login:LoginViewModel):Observable<any>{
  //   return this.httpclient.post<any>(this.url+"/Login",login,{responseType:"json"}).pipe(map(user=>{
  //     if(user)
  //     {
  //       this.currentUserName=user.UserName
  //     }
  //     return user;
  //   }))

  // }
  // public Logout()
  // {
  //   localStorage.removeItem("token")
  //   this.currentUserName=null;
  // }
  // public getLogout(): Observable<string> {
  //   return this.httpclient.get<string>(this.url+"./logout");
  // }
  public Login(login: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpbackend);
    return this.httpClient.post<any>(`${this.url}/Login`, login, { responseType: 'json' }).pipe(
      map(user => {
        if (user) {
         
              this.currentUserName = user.email;
              console.log(this.currentUserName+"in login servcie");
              localStorage.setItem("token", user.token);
              sessionStorage['currentUser'] = JSON.stringify(user);
            
       // Assuming you store a token
        }
        return user;
      })
    );
  }

  public Logout() {
    sessionStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUserName = null;
  }


}
