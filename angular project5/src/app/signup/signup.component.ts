import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerValidationform: FormGroup
  public router:Router;
  
  constructor(public FormBuilder: FormBuilder) {
    this.registerValidationform = FormBuilder.group({
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('login')
  }
  website(){
    this.router.navigateByUrl('website');
  }
  register(data) {
    this.registerValidationform.controls['firstname'].markAsTouched();
    this.registerValidationform.controls['email'].markAsTouched()
    this.registerValidationform.controls['password'].markAsTouched()

    if (data.firstname && data.email && data.password) {
      let registerdata = {
        firstname: data.firstname,
      email: data.email,
        password: data.password
      }
      
      console.log('checking', registerdata)
      
    }
    
  }

}
