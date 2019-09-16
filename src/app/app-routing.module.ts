import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from'./login/login.component';
import{DashboardComponent}from'./dashboard/dashboard.component';
import{CrumbComponent}from'./crumb/crumb.component';
import{SolutionComponent}from'./solution/solution.component';
import{MouldComponent}from'./mould/mould.component';
import{ProductionComponent}from'./production/production.component';
import{ColorComponent}from'./color/color.component';
import { PayrollComponent } from './payroll/payroll.component';
import{SidenavComponent}from'./sidenav/sidenav.component';
import{ColornameComponent}from'./colorname/colorname.component';
import{ColorcodeComponent}from'./colorcode/colorcode.component';

const routes: Routes = [ 
{path:'',component:LoginComponent}, 
{path:'login',component:LoginComponent},
{path:'sidenav',component:SidenavComponent,

children:[
  {path:'',component:DashboardComponent},
  {path:'production',component:ProductionComponent},
  {path:'crumb',component:CrumbComponent},
  {path:'solution',component:SolutionComponent},
  {path:'mould',component:MouldComponent},
  {path:'color',component:ColorComponent,

children:[
  {path:'colorname',component:ColornameComponent},
  {path:'colorcode',component:ColorcodeComponent},
]
},

  {path:'payroll',component:PayrollComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
