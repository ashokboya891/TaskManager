import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "../admin/projects/projects.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from "../Services/dashboard.service";
import {  ReactiveFormsModule,FormsModule} from "@angular/forms";
import {  TeamSizeValidatorDirective} from "../team-size.directive";
@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective

   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    DashboardComponent,AboutComponent,MyProfileComponent,ProjectsComponent,TeamSizeValidatorDirective
  ],
  providers:[DashboardService]
})
export class AdminModule { }
