import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  un:string;
  pswd:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 loginFun(loginForm){
   console.log(loginForm.value);
   this.un=loginForm.value.user;
   this.pswd=loginForm.value.pass;
   if(this.un=="angel"){
     this.router.navigate(["/emp",this.un]);
     console.log("successfully logged in");

   }else{
    this.router.navigate(["/welcome"]);

    console.log("credentials are not correct");

   }
 }
}
