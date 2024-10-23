import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Project } from '../project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url:string="https://localhost:7018";
  constructor(private httpclient:HttpClient ) { }

  getProjects():Observable<Project[]>{
   return this.httpclient.get<Project[]>(this.url+"/api/Projects")
  }

  insertProjects(newproject:Project):Observable<Project>{
    return this.httpclient.post<Project>(this.url+"/api/Projects",newproject)
   }
   updateProject(existingProject: Project): Observable<Project>
  {
    console.log(existingProject.projectName)
    return this.httpclient.put<Project>(this.url + "/api/Projects/"+existingProject.projectID, existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpclient.delete<string>(this.url + "/api/Projects/" + ProjectID);
  }
}
