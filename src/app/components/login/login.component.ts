import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UsersService } from '../../services/users/users.service'
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  error = '';
  next = '/dashboard';

  constructor(private loginService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
     const url = this.router.url;
      if (params['next']) {
        this.next = params['next'];
      }
    });
  }

  onSubmit = (username: string, password: string) => {
    this.submitted = true;
    this.loginService.signIn(username, password)
        .subscribe((s: number) => {
      if (s === 200) {
        this.router.navigateByUrl(this.next);
      } else {
        this.error = 'Incorrect Username or Password';
        this.submitted = false;
      }
    });
  }

}
