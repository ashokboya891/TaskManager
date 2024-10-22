import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
    Designation: string = "";
    Username: string = "";
    NoOfTeamMembers: number = 0;
    TotalCostOfAllProjects: number = 0;
    PendingTasks: number = 0;
    UpComingProjects: number = 0;
    ProjectCost: number = 0;
    CurrentExpenditure: number = 0;
    AvailableFunds: number = 0;
  
    Clients: string[] = [];
    Projects: string[] = [];
    Years: number[] = [];
    TeamMembersSummary: any = [];
    TeamMembers: any = [];
  
    ngOnInit()
    {
      this.Designation = 'Team Leader';
      this.Username = 'Scott Smith';
      this.NoOfTeamMembers = 67;
      this.TotalCostOfAllProjects = 240;
      this.PendingTasks = 15;
      this.UpComingProjects = 2;
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
      this.Clients=[
        "Ashok Solutions","King Archites","Royal villas","Manu Builders"
      ];
      this.Projects=[
        "BasF Solutions","Nestle Global","Vircho Pharma","Appolo Automations"
      ]
      this.Years=[
        2019,2022,2020,2024,2023
      ],
    
      this.TeamMembers=[
        {Region: 'North',
          Members: [
             {name:"latha madhuri",status:"Avaialable",role:"Tester"},
            {name:"naina",status:"Avaialable",role:"Team Lead-1"},
             {name:"raya ",status:"Avaialable",role:"Member"},
             {name:"asok kin",status:"Busy",role:"Exec Task-1"},

          ]
        },
        {Region: 'East',
          Members: [
        {name:"joshi paul",status:"Avaialable",role:"sr.QC"},

            {name:"naina",status:"Avaialable",role:"Team Lead-1"},
             {name:"raya ",status:"Avaialable",role:"Member"},
             {name:"asok kin",status:"Busy",role:"Exec Task-1"},
          ]
        },
        {Region: 'West',
          Members: [

        {name:"sudha raga",status:"Busy",role:"junior deve"},
            {name:"naina",status:"Avaialable",role:"Team Lead-1"},
             {name:"raya ",status:"Avaialable",role:"Member"},
             {name:"asok kin",status:"Busy",role:"Exec Task-1"},
          ]
        },
        {Region: 'South',
          Members: [
            {name:"ashi khana",status:"Avaialable",role:"Member"},
            {name:"raya ",status:"Avaialable",role:"Member"},
             {name:"asok kin",status:"Busy",role:"Exec Task-1"},
           {name:"rahul ",status:"Busy",role:"s.developers"},

          ]
        },
      ]

      this.TeamMembersSummary=[
       { Region:"East",TeamMembersCount:22,TemporaryUnavailableMembers:4},
       { Region:"West",TeamMembersCount:12,TemporaryUnavailableMembers:7},
       { Region:"South",TeamMembersCount:8,TemporaryUnavailableMembers:5},
       { Region:"North",TeamMembersCount:10,TemporaryUnavailableMembers:2}

      ]
    }
  
}
