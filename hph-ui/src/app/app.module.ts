import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './register/patient/patient.component';
import { HospitalComponent } from './register/hospital/hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    DepartmentsComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    PatientComponent,
    HospitalComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
