import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { 

  }

  getTeamMembers():any[]{
    var TeamMembers=[
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
    return TeamMembers;
  }
  getTeamMembersSummary(): any[] {
    var TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];
    return TeamMembersSummary;
  }
  getClients():any[]{
    var clients=[
       "Ashok Solutions","King Archites","Royal villas","Manu Builders"
    ]
    return clients;
    }
  
  getProjects():any[]{
  var projects=[
       "Project A","BasF Solutions","Nestle Global","Vircho Pharma","Appolo Automations"

  ]
  return projects;
  }
  getYears():any[]{
    var years=[    
        2019,2022,2020,2024,2023    
    ]
    return years;
  }
}
