import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  //string interpolation
  title = 'own_project';
  city:string = "chennai";
  path:string = '../assets/chennai.jpg';
  name="Chidanand";
  cname:string ="special pecial";
  d:string = new Date().toLocaleDateString();
  timerid =setInterval(()=>{
    this.d=new Date().toLocaleTimeString();
  });
  
  //property binding
  isdisabled:boolean=true;
  ishidden:boolean=true;

  //class binding
  isactive:boolean=false;
  applyc1:boolean=true;

  //style binding
  cvar:string='blue';
  mystyle:object={
    color:'pink',
    background:'grey',
    border:'5px solid blue'
  };
  haserror:boolean=true;

  //event binding
  counter:number= 0;
  increment(){
    this.counter+=1;
  };
  decrease(){
    this.counter-=1
  };
  my_name="chida";
  changename(e:any){
    this.my_name=e.target.value
  };

  //two-way data binding
  place="hyderabad";
  updateCity(){
  this.place="chennai"  
  };

  //directives
  movies=["Bahubali","salaar","project-k"]
}
