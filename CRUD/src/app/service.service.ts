
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
 providedIn: 'root'
})
export class ServiceService {
  register(data: any) {
    throw new Error("Method not implemented.");
  }
 baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'my-auth-token'
   })
 };
 constructor(private http: HttpClient) { }
 registerUser(values) {
   let body = {
     name: values.username,
     password: values.password,
     confirmpassword: values.confirm
   }
  
   return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users', 
   body,this.httpOptions).pipe(map(data => { })).subscribe(result => {
     console.log("1", result)
   })
 }
}