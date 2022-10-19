import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }


  login(data:any){

      return this.httpClient.post(`${environment.APIUrl}users/login`,{
        email: data.username,
        password: data.password,
      });
    
  }
  saveLoginData(data: any) {
    localStorage.setItem('loginData', JSON.stringify(data));
  }
}
