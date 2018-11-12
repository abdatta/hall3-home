import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  hecs: object[];

  newhecs = {};

  submitting = false;
  error = '';

  constructor(private loginService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.loginService.getUsers('hec')
        .subscribe((s: object[]) => {
          this.hecs = s;
      });
  }

  add(user: string) {
    this.newhecs[user] = '';
  }

  remove(user: string) {
    delete this.newhecs[user];
  }

  submit() {
    let fail = '';
    Object.keys(this.newhecs).forEach( username => {
      if (!this.newhecs[username].trim()) {
        fail = username;
      }
    });
    if (fail) {
      this.error = 'Empty Email ID!';
      return;
    }
    Object.keys(this.newhecs).forEach( username => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.newhecs[username])) {
        fail = username;
      }
    });
    if (fail) {
      this.error = 'Invalid Email ID - ' + this.newhecs[fail];
      return;
    }

    this.error = '';
    this.submitting = true;
    this.loginService.transferRequest(this.newhecs)
        .subscribe((s: number) => {
          if (s === 200) {
            this.router.navigateByUrl('/user/dashboard');
          } else {
            // this.error = 'Incorrect Username or Password';
            // this.submitted = false;
          }
          this.submitting = false;
        });
  }

}
