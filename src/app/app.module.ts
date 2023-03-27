import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
// import { TableauComponent } from './components/tableau/tableau.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReglageComponent } from './pages/reglage/reglage.component';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    SideBarComponent,
    LoginComponent,
    ReglageComponent,
    // NavBarComponent,
    // SideBarComponent,
    // LoginComponent,
    // DashbordComponent,
    // TableauComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    }),
    HttpClientModule,
    NgbDatepickerModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
