import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from './emp.service';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
ename:string="leo";
email:string="leo@gmail.com"
username:string;
value:string;
dob=new Date();
  constructor(private actRoute:ActivatedRoute,private empServ:EmpService) { }

  ngOnInit(): void {

    this.username=this.actRoute.snapshot.params["un"];
    this.value=this.empServ.empService();
  }
  empDetails:any=[
    {eid:122,ename:"Anu"},
    {eid:123,ename:"Ram"}
  ]
 empForm=new FormGroup({
   eid:new FormControl(null,[Validators.required,Validators.minLength(4)]),
   emobil:new FormControl(null,[Validators.required,Validators.minLength(10)])

 })
 empFun(){
   
 }
}
