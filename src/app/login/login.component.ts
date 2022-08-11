import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_error_message:boolean = false;

  constructor(private router:Router) {  }

  ngOnInit(): void {}

  valid_users = [
    new User("Michael", "08/04/1999", 23, "michael@mail.com", "mpass", true),
    new User("Sophie", "13/01/2000", 22, "sophie@mail.com", "spass", true),
    new User("Aiden", "26/02/1999", 23, "aiden@mail.com", "apass", true),
  ];

  email:string = "";
  pass:string = "";

  login(email:string, pass:string) {
    this.valid_users.forEach((user) => {
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
