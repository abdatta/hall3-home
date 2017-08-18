import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  add = false;

  constructor(private newsService: NewsService,
              private loginService: UsersService,
              private router: Router) {}

  ngOnInit() {
    this.loginService.getUser()
        .then((user: User) => {
          this.user = user;
        });
  }

  addNews(head: string, link: string, body: string) {
    this.submitted = true;
    this.newsService.addNews({
      'by': this.user.name,
      'head': head,
      'body': (this.add)?body:'',
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
