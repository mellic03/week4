import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../services/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


interface UserCredentials {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_error_message:boolean = false;

  constructor(private httpClient:HttpClient, private router:Router, private userService:UserService) {  }

  ngOnInit(): void {}

  email:string = "";
  pass:string = "";

  login(email:string, pass:string) {

    this.httpClient.post<UserCredentials>('/api/auth', {email, pass}).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log("Error!");
      }
    
    );

  }
}
