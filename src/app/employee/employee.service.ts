import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            userId:"rirani",
            jobTitleName:"Developer",
            firstName:"Romin",
            lastName:"Irani",
            preferredFullName:"Romin Irani",
            employeeCode:"E1",
            region:"CA",
            phoneNumber:4081234567,
            emailAddress:"romin.k.irani@gmail.com",
            photoPath : 'assets/images/mark.png',
            reportingManager : "sankumar",
            },
            {
            userId:"nirani",
            jobTitleName:"Developer",
            firstName:"Neil",
            lastName:"Irani",
            preferredFullName:"Neil Irani",
            employeeCode:"E2",
            region:"CA",
            phoneNumber:4081111111,
            emailAddress:"neilrirani@gmail.com",
            photoPath : 'assets/images/mary.png',
            reportingManager : "aravi",
            },
            {
            userId:"thanks",
            jobTitleName:"Program Directory",
            firstName:"Tom",
            lastName:"Hanks",
            preferredFullName:"Tom Hanks",
            employeeCode:"E3",
            region:"CA",
            phoneNumber:4082222222,
            emailAddress:"tomhanks@gmail.com",
            photoPath : 'assets/images/john.png',
            reportingManager : "loke",
            }
        
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    getEmployee(id: string): Employee {
        return this.listEmployees.find(e => e.userId === id);
    }

}