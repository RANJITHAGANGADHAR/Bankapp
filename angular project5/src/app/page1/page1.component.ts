import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
// import { ServiceService } from 'src\app\service.service';
​
​
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
​
 page1 : FormGroup
​
  constructor(private router: Router, private build: FormBuilder, private http:ServiceService) {
this.page1 = this.build.group({
  username: new FormControl(),
  password: new FormControl(),
  cpass: new FormControl()
})
​
   }
​
ngOnInit() {
}
log() {
  this.router.navigateByUrl("page2")
}
register(values) {
  console.log(values)
  this.http.registerUser(values).add(data => {
    console.log("2", data)
  })
}
​
}
