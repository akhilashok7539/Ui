import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  url: string;
  constructor(private _activatedRoute:ActivatedRoute,private _router: Router ){
  }
    

  ngOnInit() {
  }
 
  registerPat():void{
  this._router.navigate(['/Patient']);
  }
  registerHos():void{
  this._router.navigate(['/Hospital']);
 }
}
