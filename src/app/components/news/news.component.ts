import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import * as moment from 'moment';

import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data: object[];
  categories: string[] = [
      'all',
      'announcements',
      'minutes',
      'other_documents'
  ];
  cat: string = 'all';
  loaded = false;
  submitted = false;
  success = 0;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.loaded = false;
        this.submitted = false;
        this.success = 0;

        if (this.categories.indexOf(params['cat']) === -1) {
            this.router.navigateByUrl('/notices');
        }
       this.cat = params['cat'];

        let service;
        if(params['cat'] === 'all')
            service = this.newsService.getNews();
        else
            service = this.newsService.getCatNews(params['cat']);

        service.subscribe((d: object[]) => {
            if (d.hasOwnProperty('err')) {
              this.data = [{}];
            } else {
              this.data = d;
              this.loaded = true;
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

  isNew(date: string) {
    return moment(date).isAfter(moment().subtract(3, 'days').startOf('day'));
  }

  titlize(str: string) {
    return str.replace(new RegExp('_', "g"),' ').replace(/(\w)(\w*)/g, function (_, i, r) {
      return i.toUpperCase() + (r != null ? r : "");
    });
  }

  subscribe(id: string) {
      this.submitted = true;
      for(let cat of this.categories) {
          if (cat === 'all')
              continue;
          if (cat !== this.cat && this.cat !== 'all') {
              this.success++;
              continue;
          }
          this.newsService.subscribe(cat, id)
              .subscribe((s: number) => {
                  if (s === 200) {
                      this.success++;
                  } else {
                  }
              });
      }
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
