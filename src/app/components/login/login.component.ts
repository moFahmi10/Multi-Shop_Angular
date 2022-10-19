import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){

    if( this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((res:any)=>{
          console.log(res);
          this.authService.saveLoginData(res);
      },(err:any)=>{console.log(err)});
    }
    

  }
}
