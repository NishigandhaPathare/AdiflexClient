import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumbComponent } from './crumb/crumb.component';
import { SolutionComponent } from './solution/solution.component';
import { MouldComponent } from './mould/mould.component';
import { ProductionComponent } from './production/production.component';
import { ColorComponent } from './color/color.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ColornameComponent } from './colorname/colorname.component';
import { ColorcodeComponent } from './colorcode/colorcode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CrumbComponent,
    SolutionComponent,
    MouldComponent,
    ProductionComponent,
    ColorComponent,
    PayrollComponent,
    SidenavComponent,
    ColornameComponent,
    ColorcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
