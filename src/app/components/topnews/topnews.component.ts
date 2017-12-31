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
      '500': {
        items: 2
      },
      '900': {
        items: 3
      },
      '1200': {
        items: 4
      }
    },
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 7000,
    rewind: true,
    autoplaySpeed: 800,
    autoplayHoverPause: true
  };

  data: object[];
  loaded = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopNews()
        .subscribe((d: object[]) => {
          if (d.hasOwnProperty('err')) {
            this.data = [{}];
          } else {
            this.data = d;
            this.loaded = true;
          }
        });
  }
  
}
