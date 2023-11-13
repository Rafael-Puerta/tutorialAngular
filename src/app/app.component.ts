import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorialAngular';
  newMemberName="";
  members:string[]=[];
  errorMessage:string="";
  numberTeams:number=0;
  teams: string[][]=[];
  createGroups(){
    if(!this.numberTeams||this.numberTeams<=0){
      this.errorMessage="Invalid number of teams";
      return;
    }
    if(this.members.length<this.numberTeams){
      this.errorMessage="Not enough members to make the teams";
      return;
    }
    this.teams=[];
    this.errorMessage=""
    const allMembers=[...this.members];
    while(allMembers.length){
      for (let i=0;i<this.numberTeams;i++){
        const randomIdex=Math.floor(Math.random()*allMembers.length);
        const member=allMembers.splice(randomIdex,1)[0];
        if(!member){
          break;
        }
        if(this.teams[i]){
          this.teams[i].push(member);
        } else{
          this.teams[i]=[member];
        }
      }
    }
    
    this.members=[];
    this.numberTeams=0;
  }
  addMember(){
    if(!this.newMemberName){
      this.errorMessage="Name cant be empty";
      return;
    }
    this.members.push(this.newMemberName);
    this.errorMessage="";
    this.newMemberName="";
  }
  onInput(member:string){
    this.newMemberName=member;
  }
  onInputNumber(teamsNum:string){
    this.numberTeams=Number(teamsNum);
  }
}
