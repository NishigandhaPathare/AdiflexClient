import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  number:number;
 
  set(event:number)
  {
    this.number=event;
    switch(this.number)
    {
      case 0:this.router.navigate(['/sidenav/production']);
      break;
      case 1:this.router.navigate(['/sidenav/crumb']);
      break;
      case 2:this.router.navigate(['/sidenav/solution']);
      break;
      case 3:this.router.navigate(['/sidenav/mould']);
      break;
      case 4:this.router.navigate(['/sidenav/color/colorname']);
      break;
      case 5:this.router.navigate(['/sidenav/color/colorcode']);
      break;
      case 6:this.router.navigate(['/sidenav/payroll']);
      break;
      default:alert("Load");
    }
  }
  
  constructor( private router:Router) { }
  logout(){
    this.router.navigate(['/login']);
  }
show:boolean=false;
   count=0;
   OpenOnClick(){
     if(this.count==0)
     {
       this.show=true;
       this.count++;
     }
     else{
       this.count--;
       this.show=false;
     }
   }
  ngOnInit() {
    }

}
