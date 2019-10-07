import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ManagerService } from '../manager/manager.service';
@Component({
  //selector: 'app-employee-details',
  templateUrl: './employee.details.component.html',
  styleUrls: ['./employee.details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  manager : Employee;
  constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _managerService: ManagerService
    ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.employee = this._employeeService.getEmployee(id);
    this.manager = this._managerService.getManager(this.employee.reportingManager);
  }
}
