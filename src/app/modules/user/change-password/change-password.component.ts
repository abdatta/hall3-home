import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../../services/users/users.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  submitted = false; ;
  error = '';
  loggedout = false;

  constructor(private loginService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit = (currpass: string, newpass: string) => {
    this.submitted = true;
    this.loginService.changePassword(currpass, newpass)
        .subscribe((s: number) => {
          if (s === 200) {
            this.loggedout = true;
          } else {
            this.error = (s === 403) ? 'Incorrect Password' : 'Some Error Occurred';
            this.submitted = false;
          }
        });
  }

}
