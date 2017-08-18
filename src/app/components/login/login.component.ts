import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service'
import { User } from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  error = '';

  constructor(private loginService: UsersService,
              private router: Router) {}

  ngOnInit() {
  }

  onSubmit = (username: string, password: string) => {
    this.submitted = true;
    this.loginService.signIn(username, password)
        .subscribe((s: number) => {
      if (s === 200) {
        this.router.navigateByUrl('/news/dashboard');
      } else {
        this.error ='Incorrect Username or Password';
        this.submitted = false;
      }
    });
  }

}
