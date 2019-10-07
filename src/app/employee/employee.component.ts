import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
@Component({
  //selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  name = 'Angular 6';
  email="";
  aa:boolean=false;

  constructor(
    private _employeeService: EmployeeService,

  ) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  setIndex(ii){
    this.aa=ii;
    console.log
  }
}
