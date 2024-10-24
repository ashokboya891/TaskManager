import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from "@angular/common/http";
import { Project } from '../project';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url:string="https://localhost:7018";

  jsonUrl:string="http://localhost:3000/projects";
  constructor(private httpclient:HttpClient ) { }

  getProjects():Observable<Project[]>{
    return this.httpclient
      // .get<Project[]>(this.url + '/api/Projects', { responseType: 'json' })
      .get<Project[]>(this.jsonUrl, { responseType: 'json' })

      .pipe(
        map((data: Project[]) =>
        {
          for (let i = 0; i < data.length; i++)
          {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        })
      );
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
  SearchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    const params = new HttpParams()
      .set('searchBy', searchBy)
      .set('searchText', searchText);
  
    return this.httpclient.get<Project[]>(this.url + '/api/Projects/Search', { params });
  }
  
  // SearchProjects(searchBy:string,searchText:string):Observable<Project[]>{  
  //   return this.httpclient.get<Project[]>(
  //     this.url + '/api/Projects/Search?searchBy/' + searchBy + '/' + searchText,
     
  //   );

    // return this.httpclient.get<Project[]>(this.url+"/api/Projects/Search/"+searchBy+"/"+searchText)
  }

