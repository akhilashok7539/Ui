import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

private apiUrl:string ="https://192.168.1.14:8085/calibros/api/regpatients"

 constructor( private _activatedRoute:ActivatedRoute,
              private _router: Router,
              private http:HttpClient

            ) { }

  ngOnInit() {
    this.register();
  }
  
  register(){
    let user = {
      "FirstName":"",
      "LastName":"",
      "MobileNumber":"",
      "Password":"",
      "ConfirmPassword":"",

    };
    this.http.post(`${this.apiUrl}`,user).subscribe(
      data =>{

      },
      error =>{

      }
    );
  }
  cancel():void{
    this._router.navigate(['/Register']);
  }
}
