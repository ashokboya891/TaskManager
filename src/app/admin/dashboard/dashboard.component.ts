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
    ToDay:Date | undefined;
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
      this.UpComingProjects = 0.7;
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
      this.ToDay=new Date();
      this.Clients=[
        "Ashok Solutions","King Archites","Royal villas","Manu Builders"
      ];
      this.Projects=[
        "Project A","BasF Solutions","Nestle Global","Vircho Pharma","Appolo Automations"
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
    onProjectChange($event:any)
    {
      console.log($event.target.innerHTML);
      if ($event.target.innerHTML.trim() == 'BasF Solutions')
      {
        this.ProjectCost = 2123507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52436;
      }
      else if ($event.target.innerHTML.trim() == 'Project A')
        {
          this.ProjectCost = 21235507;
          this.CurrentExpenditure = 296788;
          this.AvailableFunds = 552436;
        }
      else if ($event.target.innerHTML.trim() == 'Nestle Global')
      {
        this.ProjectCost = 88923;
        this.CurrentExpenditure = 22450;
        this.AvailableFunds = 2640;
      }
      else if($event.target.innerHTML.trim() == 'Vircho Pharma')
      {
        this.ProjectCost = 662183;
        this.CurrentExpenditure = 7721;
        this.AvailableFunds = 9811;
      }
      else if($event.target.innerHTML.trim() == 'Appolo Automations')
      {
        this.ProjectCost = 928431;
        this.CurrentExpenditure = 562;
        this.AvailableFunds = 883;
      }

    }
  
}
