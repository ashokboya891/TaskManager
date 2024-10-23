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


}
