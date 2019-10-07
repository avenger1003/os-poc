import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  employee: Employee;
  constructor(private _route: ActivatedRoute,
    private _managerService: ManagerService) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    
    this.employee = this._managerService.getManager(id);
   
  }

}
