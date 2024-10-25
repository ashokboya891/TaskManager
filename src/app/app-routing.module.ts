import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import {LoginComponent  } from "../app/login/login.component";
import {ProjectsComponent  } from "../app/admin/projects/projects.component";
import { canActivateGuard } from './can-activate.guard';
const routes: Routes = [
  {
    path:"dashboard",component:DashboardComponent,canActivate: [ canActivateGuard ]
  },
  {
    path:"about",component:AboutComponent,
  },
  {
    path:"myProfile",component:MyProfileComponent
  },
  {
    path:"projects",component:ProjectsComponent,canActivate: [ canActivateGuard ]

  },
  {
    path:"login",component:LoginComponent

  },
  // {
  //  path:"", redirectTo:"login",pathMatch:"full"
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
