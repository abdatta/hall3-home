import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted = false;
  error = '';

  constructor(private loginService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit = (name: string, username: string, password: string) => {
    this.submitted = true;
    this.loginService.signUp(name, username, password)
        .subscribe((s: number) => {
          if (s === 200) {
            this.router.navigateByUrl('/dashboard');
          } else {
            this.error = 'Incorrect Username or Password';
            this.submitted = false;
          }
        });
  }
}
