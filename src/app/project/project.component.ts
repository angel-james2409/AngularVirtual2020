import { Component, OnInit } from '@angular/core';
import { project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 result:project[];
  constructor(private proService:ProjectService){ }

  ngOnInit(): void {
    this.proService.restServiceFun().subscribe((data)=>{this.result=data}) ; 
  }

}
