import { Routes, RouterModule, ActivatedRoute } from '@angular/router';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee.details.component';
import { ManagerComponent } from './manager/manager.component';
import { SignupComponent} from './signup/signup.component';

const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'employee/:id', component: EmployeeDetailsComponent , canActivate: [AuthGuard] },
    { path: 'manager/:id', component: ManagerComponent , canActivate: [AuthGuard] },
    { path: '', component: EmployeeComponent, canActivate: [AuthGuard] },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);