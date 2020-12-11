import { Injectable } from '@angular/core';
import{ Observable} from'rxjs';
import{ project} from './project';
import{ HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient ){ }
    
   restServiceFun():Observable<project[]>{
    return this.http.get<project[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
