import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private listManagers: Employee[] = [
    {
        userId:"sankumar",
        jobTitleName:"Technical Manager",
        firstName:"Sandeep",
        lastName:"Kumar",
        preferredFullName:"Sandeep Kumar",
        employeeCode:"E1",
        region:"CA",
        phoneNumber:4081234567,
        emailAddress:"sandeepkumar@gmail.com",
        photoPath : 'assets/images/mark.png',
        
        },
        {
        userId:"aravi",
        jobTitleName:"Technical Manager",
        firstName:"Aravind",
        lastName:"Sastry",
        preferredFullName:"Aravind Sastry",
        employeeCode:"E2",
        region:"CA",
        phoneNumber:4081111111,
        emailAddress:"aravi@gmail.com",
        photoPath : 'assets/images/mary.png',
        
        },
        {
        userId:"loke",
        jobTitleName:"HR Manager",
        firstName:"Lokesh",
        lastName:"M",
        preferredFullName:"Lokesh M",
        employeeCode:"E3",
        region:"CA",
        phoneNumber:4082222222,
        emailAddress:"lokesh@gmail.com",
        photoPath : 'assets/images/john.png',
        
        }
    
];

getManagers(): Employee[] {
    return this.listManagers;
}

getManager(id: string): Employee {
    return this.listManagers.find(e => e.userId === id);
}
  constructor() { }
}
