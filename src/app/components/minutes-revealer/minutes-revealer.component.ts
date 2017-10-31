import { Component, OnInit, Input } from '@angular/core';
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
  height = -1;
  data: object[] = [];

  constructor(private service: NewsService) { }

  ngOnInit() {
  }

  revealer() {
    this.reveal = !this.reveal;
    if(this.reveal) {
      document.getElementById('board').style.height = 'auto';
      const autoheight = document.getElementById('board').offsetHeight;
      document.getElementById('board').style.height = '0px';
      setTimeout(()=>{
        document.getElementById('board').style.height = `${autoheight}px`;
      }, 10);
      const l = this.data.length;
      const cat = (this.category + ' minutes').trim();
      this.service
          .getCatNews(cat.split(' '))
          .subscribe((d: object[]) => {
              if (d.hasOwnProperty('err')) {
                this.data = [{}];
              } else {
                this.data = d;              
              }
              this.loaded = true;
              if(d.length != l) {
                setTimeout(()=>{
                document.getElementById('board').style.height = 'auto';
                const newheight = document.getElementById('board').offsetHeight;
                document.getElementById('board').style.height = `${autoheight}px`;
                setTimeout(()=>{
                  document.getElementById('board').style.height = `${newheight}px`;
                }, 40);
              },80);
            }
            }); 
      }
      else {
        this.height = document.getElementById('board').offsetHeight;
        document.getElementById('board').style.height = `${this.height}px`;
        setTimeout(()=>{
        document.getElementById('board').style.height = '0px';
      }, 40);
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
