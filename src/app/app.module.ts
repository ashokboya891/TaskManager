import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Ensure this is imported
import { JwtInterceptorService } from './jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorService } from './jwt-un-authorized-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ 
//order of inceptors matter cause it executes how it declared
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtUnAuthorizedInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
