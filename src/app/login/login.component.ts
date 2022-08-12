import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_error_message:boolean = false;

  constructor(private router:Router, private userService:UserService) {  }

  ngOnInit(): void {}

  email:string = "";
  pass:string = "";

  login(email:string, pass:string) {
    this.userService.valid_users.forEach((user) => {
      if (email == user.email && pass == user.password) {
        if (typeof(Storage) !== "undefined") {
          let user_info_nopass = user;
          user_info_nopass.password = "";
          localStorage.setItem("user_info", JSON.stringify(user_info_nopass));
        }
        this.router.navigateByUrl("/account");
        return;
      }
    });
    this.show_error_message = true;
  }
}
