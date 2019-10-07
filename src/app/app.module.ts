﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './employee/search.pipe';
import { EmployeeService } from './employee/employee.service';
import {EmployeeDetailsComponent} from './employee/employee.details.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';;
import { SignupComponent } from './signup/signup.component'

@NgModule({

    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent, 
        SearchPipe,
        EmployeeComponent ,
        EmployeeDetailsComponent,
        ManagerComponent ,
        SignupComponent     ],
    providers: [
        EmployeeService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }