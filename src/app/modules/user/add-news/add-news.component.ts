import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from '../../../services/news/news.service';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  user: User;
  submitted = false;
  data = {
      'to': '',
      'head': '',
      'body': '',
      'cat': '',
      'link': ''
    };

  constructor(private newsService: NewsService,
              private loginService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.loginService.getUser()
        .then((user: User) => {
          this.user = user;
        });
    this.route.queryParams.subscribe((params: Params) => {
      if (params['head']) { this.data['head'] = params['head']; }
      if (params['to']) { this.data['to'] = params['to']; }
      if (params['cat']) { this.data['cat'] = params['cat']; }
      if (params['link']) { this.data['link'] = params['link']; }
      if (params['body']) { this.data['body'] = params['body']; }
    });
  }

  addNews(head: string, link: string, cat: string, to: string, body: string) {
    this.submitted = true;
    this.newsService.addNews({
      'by': this.user.name,
      'to': to,
      'head': head,
      'body': body,
      'category': cat.split(' '),
      'link': link
    }).subscribe((s: number) => {
        if (s === 200) {
          this.router.navigateByUrl('/');
          this.submitted = false;
        } else {
          this.submitted = false;
        }
      });
  }
}
