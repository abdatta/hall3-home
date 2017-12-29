import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { UsersService } from '../../services/users/users.service';
import { NewsService } from '../../services/news/news.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  loaded = false;
  data: object[] = [];

  constructor(private loginService: UsersService,
              private newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
    this.loginService.getUser()
        .then((user: User) => {
          this.user = user;
          this.newsService.getUserNews(this.user.name)
              .subscribe((d: object[]) => {
                if (d.hasOwnProperty('err')) {
                  this.data = [{}];
                } else {
                  this.data = d;
                  this.loaded = true;
                  //this.resizing = 0;
                  /*setTimeout(() => {
                   this.resize();
                   window.addEventListener("resize", this.resize);
                   },100);*/
                }
              });
        });
  }

  getFormattedDate(date: string) {
    return moment(date).format('MMM DD, YYYY');
  }

  isURL(str: string): boolean {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(str);
  }

  isInternalURL(str: string): boolean {
    return str.startsWith('http://hall3iitk.com');
  }

  getInternalRoute(str: string): string {
    return str.replace('http://hall3iitk.com','');
  }

  isNew(date: string) {
    return moment(date).isAfter(moment().subtract(3, 'days').startOf('day'));
  }

  titlize(str: string) {
    return str.replace(new RegExp('_', "g"),' ').replace(/(\w)(\w*)/g, function (_, i, r) {
      return i.toUpperCase() + (r != null ? r : "");
    });
  }

  isLevel(level: string): boolean {
    return (this.user.levelsCurrent.indexOf(level) !== -1) || (this.user.levelsCurrent.indexOf('admin') !== -1);
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

    trim(s: string, l: number) {
        if(s.length <= l)
            return s;
        else {
            let t = s.slice(0,l+1);
            return t.slice(0,t.lastIndexOf(' ')) + '...';
        }
    }

}
