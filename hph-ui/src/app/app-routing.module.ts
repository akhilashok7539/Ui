import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './register/patient/patient.component';
import { HospitalComponent } from './register/hospital/hospital.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Appointment', component: RegisterComponent },

  { path: 'Departments', component: DepartmentsComponent },
  { path: 'Login', component: LoginComponent },
  { path:'Patient',component:PatientComponent},
  { path:'Register',component:RegisterComponent},
  { path:'Hospital',component:HospitalComponent}
  
  
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
