import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import * as moment from 'moment';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {

  carouselOptions = {
    nav: false,
    responsive: {
      '0': {
        items: 1
      },
      '468': {
        items: 2
      },
      '768': {
        items: 3
      },
      '1000': {
        items: 4
      }
    },
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  };

  data: object[];
  loaded = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
        .subscribe((d: object[]) => {
          if (d.hasOwnProperty('err')) {
            this.data = [{}];
          } else {
            this.data = d.slice().reverse();
            this.loaded = true;
          }
        });
  }

  getFormattedDate(date: string) {
    return moment(date).format('MMM DD, YYYY');
  }

  isNew(date: string) {
    return moment(date).isAfter(moment().subtract(7, 'days').startOf('day'));
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
}
