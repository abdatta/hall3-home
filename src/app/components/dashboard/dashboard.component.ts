import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private loginService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.loginService.getUser()
        .then((user: User) => {
          this.user = user;
        });
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

}
