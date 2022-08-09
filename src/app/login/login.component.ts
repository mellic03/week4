import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_error_message:boolean = false;


  constructor(private router:Router) {  }

  ngOnInit(): void { }

  valid_users = [
    {email: "michael@mail.com", pass: "mpass"},
    {email: "sophie@mail.com", pass: "spass"},
    {email: "aiden@mail.com", pass: "apass"}
  ];

  email:string = "";
  pass:string = "";

  login(email:string, pass:string) {
    this.valid_users.forEach((user) => {
      if (email == user.email && pass == user.pass) {
        this.router.navigateByUrl("/account");
        return;
      }
    });
    this.show_error_message = true;
  }

}
