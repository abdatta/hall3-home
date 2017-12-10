import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
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

  constructor(private service: NewsService) { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event']) resize(event) {
    this.width = (event.srcElement.innerWidth < 768) ? 1 : 2;
  }

  revealer() {
    this.reveal = !this.reveal;
    if(this.reveal) {
      this.service
          .getCatNews((this.category + ' minutes').trim().split(' '))
          .subscribe((d: object[]) => {
              if (d.hasOwnProperty('err')) {
              } else {
                this.data = d;              
              }
              this.loaded = true;
            }); 
      }
      else {
      }
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

    trim(s: string, l: number) {
        if(s.length <= l)
            return s;
        else {
            let t = s.slice(0,l+1);
            return t.slice(0,t.lastIndexOf(' ')) + '...';
        }
    }

}
