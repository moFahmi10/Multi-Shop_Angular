import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient , private router:Router)  { }


  login(data:any){

      return this.httpClient.post(`${environment.APIUrl}users/login`,{
        email: data.username,
        password: data.password,
      });
    
  }
  saveLoginData(data: any) {
    localStorage.setItem('loginData', JSON.stringify(data));
  }
  loadLoginData():any{
   return JSON.parse (localStorage.getItem('loginData')??'')
  }

  hasLoginData():boolean{
    return  localStorage.getItem('loginData')? true: false ;
  }
  getToken():string{
    return this.loadLoginData()?.token  ;
  }
  getName():string{
    return this.loadLoginData()?.first_name ; 
  }
  getLastName():string{
    return this.loadLoginData()?.last_name ; 
  }
  
  getUserId():string{
    return this.loadLoginData()?._id ; 
  }
  getEmail():string{
    return this.loadLoginData()?.email;
  }
  logOut(){
    localStorage.removeItem('loginData');
    this.router.navigate(['']);
  }
}
