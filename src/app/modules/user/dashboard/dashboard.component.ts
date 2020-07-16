import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { UsersService } from '../../../services/users/users.service';
import { NewsService } from '../../../services/news/news.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  loaded = false;
  data: object[] = [];
  options: object[] = [];

  private _options = [
    {
      text: 'Add Notice',
      link: '/user/notice/add',
      guard: 'hec'
    },
    {
      text: 'Edit Mail Groups',
      link: '/user/mail_groups',
      guard: 'hec'
    },
    {
      text: 'Sign Up a New User',
      link: '/user/signup',
      guard: 'admin'
    },
    {
      text: 'Update Sports Inventory',
      link: '/facility/sports',
      guard: 'sports'
    },
    {
      text: 'Update CS Details',
      link: '/people/cscoreteam',
      guard: 'cs'
    },
    {
      text: 'Transfer HEC Accounts',
      link: '/user/transfer',
      guard: 'president'
    },
    {
      text: 'Change Password',
      link: '/user/changepassword'
    }
  ];

  constructor(private loginService: UsersService,
              private newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
    this.loginService.getUser()
        .then((user: User) => {
          this.user = user;
          this.options = this._options.filter(op => this.isAllowed(op['guard']));
          this.getNews(this.user.name);
        });
  }

  getNews(name: string) {
    this.newsService.getUserNews(name)
        .subscribe((d: object[]) => {
          if (d.length > 0 && d[0].hasOwnProperty('err')) {
            this.data = [{}];
          } else {
            this.data = d;
            this.loaded = true;
          }
        });
  }

  isAllowed(guard: string): boolean {
    if (!guard) {
      return true;
    } else {
      return (this.user.levelsCurrent.indexOf(guard) !== -1) ||
             (this.user.levelsCurrent.indexOf('admin') !== -1);
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

}
