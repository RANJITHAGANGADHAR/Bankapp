import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient) { }
productObj:object={};
addNewProduct=function(product){
  this.productObj={
    "name":product.name,
    "color":product.color
  }
  this.http.post('./assets/products.json',this.productObj).subscribe((res:Response)=>{
console.log(res);
  } 
)
}
  ngOnInit() {
  }

}
