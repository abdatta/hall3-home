import { Component, OnInit, HostListener } from '@angular/core';
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
      'lnf',
      'minutes',
      'other_documents'
  ];
  cat = 'all';
  loaded = false;
  submitted = false;
  success = 0;
  toggle: boolean;
  mobile: boolean;
  maxchars = 150;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.maxchars = (window.innerWidth < 1464) ? 150 : 300;
    this.route.params.subscribe((params: Params) => {
        this.loaded = false;
        this.submitted = false;
        this.success = 0;
        this.toggle = false;
        this.mobile = (window.innerWidth < 992);

        if (this.categories.indexOf(params['cat']) === -1) {
            this.router.navigateByUrl('/notices');
        }
       this.cat = params['cat'];

        let service;
        if (params['cat'] === 'all') {
            service = this.newsService.getNews();
        } else {
            service = this.newsService.getCatNews(params['cat']);
        }

        service.subscribe((d: object[]) => {
            if (d.length > 0 && d[0].hasOwnProperty('err')) {
              this.data = [{}];
            } else {
              this.data = d;
              this.loaded = true;
            }
          });
    });
  }

  @HostListener('window:resize', ['$event']) makeResponsive(event) {
    this.mobile = (event.srcElement.innerWidth < 992);
    this.maxchars = (event.srcElement.innerWidth < 1464) ? 150 : 300;
  }

  subscribe(id: string) {
      this.submitted = true;
      for (const cat of this.categories) {
          if (cat === 'all') {
              continue;
          }
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

  titlize(str: string) {
    if (str === 'lnf') {
      return 'Lost & Found';
    } else {
      return str.replace(new RegExp('_', 'g'), ' ')
              .replace(/(\w)(\w*)/g, (_, i, r) => i.toUpperCase() + (r != null ? r : ''));
    }
  }

}
