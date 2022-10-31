import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  baseurl: string = "http://localhost:5432/api/employees"   //Change this to the path to one of your program controllers

  constructor(
    private http: HttpClient
  ) { }

  //All of the below is for the HTTP Methods
  list(): Observable<Employee[]>{     //This is a get all method
    return this.http.get(`${this.baseurl}`) as Observable<Employee[]>;
  }

  get(id:number): Observable<Employee>{         //Get by primary Key
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Employee>;
  }

  create(empl: Employee): Observable<Employee>{       //The Post Method
    return this.http.post(`${this.baseurl}`, empl) as Observable<Employee>;
  }

  update(empl: Employee): Observable<any>{      //The put Method
    return this.http.put(`${this.baseurl}/${empl.id}`, empl) as Observable<any>;
  }
  delete(id: number): Observable<any>{    //The Delete Method
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
  login(email:string,password:string): Observable<Employee>{    //The login method
    return this.http.get(`${this.baseurl}/${email}/${password}`) as Observable<Employee>;
  }
  

}
