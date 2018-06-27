import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NewsService } from '../../../services/news/news.service';
import * as moment from 'moment';

@Component({
  selector: 'app-minutes-revealer',
  templateUrl: './minutes-revealer.component.html',
  styleUrls: ['./minutes-revealer.component.css']
})
export class MinutesRevealerComponent implements OnInit {

  @Input() category = '';
  loaded = false;
  reveal = false;
  width = 1
  data: object[] = [];
  maxchars = 150;

  constructor(private service: NewsService) { }

  ngOnInit() {
    this.maxchars = (window.innerWidth < 1464) ? 150 : 345;
  }

  @HostListener('window:resize', ['$event']) resize(event) {
    this.width = (event.srcElement.innerWidth < 768) ? 1 : 2;
    this.maxchars = (event.srcElement.innerWidth < 1464) ? 150 : 345;
  }

  revealer() {
    this.reveal = !this.reveal;
    if (this.reveal) {
      this.service
          .getCatNews((this.category + ' minutes').trim().split(' '))
          .subscribe((d: object[]) => {
              if (d[0].hasOwnProperty('err')) {
              } else {
                this.data = d;
              }
              this.loaded = true;
            });
      } else {
      }
  }

  /*subscribe(id: string) {
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
  }*/

}
