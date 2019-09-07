import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 

  constructor(public router:Router) { }

  ngOnInit() {
  }
idcard(){
  this.router.navigateByUrl('idcard')
}
courosel(){
  this.router.navigateByUrl('courosel');
}
templet(){
  this.router.navigateByUrl('templet');
}
website(){
  this.router.navigateByUrl('website');
}

}
