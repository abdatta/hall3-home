import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import * as moment from 'moment';

import { NewsService } from '../../../services/news/news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

  news: object;
  latestNews: object[];

  categories = [
      'announcements',
      'minutes',
      'other_documents'
  ]

  loaded = false;
  loaded2 = false;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.loaded = false;

      this.newsService.getOneNews(params['id']).subscribe((d: object[]) => {
        if (d.hasOwnProperty('err')) {
          this.news = {};
        } else {
          this.news = d;
          this.loaded = true;
        }
      });
    });

    this.newsService.getTopNews()
        .subscribe((d: object[]) => {
          if (d.hasOwnProperty('err')) {
            this.latestNews = [{}];
          } else {
            this.latestNews = d;
            this.loaded2 = true;
          }
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

  getCategory() {
    let cat: string[] = this.news['category'];
    if(cat.indexOf('minutes') !== -1) {
      return 'minutes';
    } else {
      return cat[0];
    }
  }
}
