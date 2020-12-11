import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
 empService():string{
  return "i am from employee service";
}

}
