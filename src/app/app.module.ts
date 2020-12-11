import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import{HttpClientModule}from'@angular/common/http';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExceptionComponent } from './exception/exception.component';
import { ProjectComponent } from './project/project.component';

const route:Routes=[
    {path:"",redirectTo:"emp",pathMatch:"full"},
    {path:"login",component:LoginComponent},
    {path:"emp",component:EmpComponent},
    {path:"emp/un",component:EmpComponent},
    {path:"home",component:HomeComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"pro",component:ProjectComponent},
    {path:"**",component:ExceptionComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    ExceptionComponent,
    ProjectComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
