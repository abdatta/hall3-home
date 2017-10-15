import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from '../../../services/news/news.service';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  user: User;
  submitted = false;
  data: object;
  olddata: object;
  loaded = false;
  changed = false;

  constructor(private newsService: NewsService,
              private loginService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.loginService.getUser()
          .then((user: User) => {
            this.user = user;
            this.newsService.getOneNews(params['id'])
                .subscribe((d: object) => {
                  if (d.hasOwnProperty('err')) {
                    this.data = {};
                  } else {
                    this.data = d;
                    this.olddata = d;
                    this.loaded = true;
                    this.data['category'] = d['category'].join(' ');
                  }
                });
          });
    });
  }

 updateNews(head: string, link: string, cat: string, body: string) {
    this.submitted = true;
    this.newsService.updateNews({
      'by': this.user.name,
      'head': head,
      'body': body,
      'category': cat.split(' '),
      'link': link
    }, this.data['_id'])
      .subscribe((s: number) => {
        if (s === 200) {
          this.router.navigateByUrl('/dashboard');
          this.submitted = false;
        } else {
          this.submitted = false;
        }
      });
  }
}
