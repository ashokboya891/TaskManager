import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "../admin/projects/projects.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from "../dashboard.service";
import { ProjectsService } from '../Services/projects.service';
@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DashboardComponent,AboutComponent,MyProfileComponent,ProjectsComponent
  ],
  providers:[DashboardService]
})
export class AdminModule { }
