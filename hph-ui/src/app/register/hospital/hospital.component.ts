import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

import { first } from 'rxjs/operators';
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get user() { return this.registrationForm.controls; }
  
  onSubmit() {
 

    if (this.registrationForm.invalid) {
        return;
    }

    
    this.userService.register(this.registrationForm.value)
        .pipe(first())
        .subscribe(
            data => {
               
                this.router.navigate(['/login']);
            },
            error => {
              
                
            });
}
}

