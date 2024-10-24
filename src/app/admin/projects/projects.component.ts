import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] =[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex: any = null;
  searchBy: string = 'ProjectName';
  searchText: string = '';
  constructor(private projectService:ProjectsService) {
  
  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((opt:Project[])=>{
      this.projects=opt
    })
  }
  refresh()
  {
    this.ngOnInit();
  }
  onSaveClick()
  {
    this.projectService.insertProjects(this.newProject).subscribe((response) => {
      //Add Project to Grid
      var p: Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      //Clear New Project Dialog - TextBoxes
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }
  onEditClick(event: any, index: number)
  {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }
  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        // Assuming the response contains the updated project data
        if (response && response.projectID) {
          // Update the local project list with the new data
          this.projects[this.editIndex] = response; // Use the response directly
        } else {
          console.error('Response does not contain expected project data:', response);
        }
  
        // Clear the edit form fields
        this.editProject = new Project(); // Resetting to a new Project instance
        this.editIndex = null; // Clear the edit index
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  aonUpdateClick()
  {
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Project) =>
      {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }
  onDeleteClick(event: any, index: number)
  {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick()
  {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) =>
      {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.dateOfStart = null;
      },
      (error) =>
      {
        console.log(error);
      });
  }
  onSearchClick()
  {
    console.log(this.searchBy+"-"+this.searchText)
    this.projectService
      .SearchProjects(this.searchBy, this.searchText)
      .subscribe(
        (response: Project[]) =>
        {
          this.projects = response;
        },
        (error) =>
        {
          console.log(error);
        }
      );
  }
}
