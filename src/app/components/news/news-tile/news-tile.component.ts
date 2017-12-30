import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-news-tile',
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.css']
})
export class NewsTileComponent implements OnInit {

	@Input() news = { _id: '', by: '', date: '', head: '', body: ''	}
	@Input() maxbody = 120;
	@Input() edit = false;

  constructor() { }

  ngOnInit() {
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

  isNew(date: string) {
    return moment(date).isAfter(moment().subtract(3, 'days').startOf('day'));
  }

  titlize(str: string) {
    if(str === 'lnf')
      return 'Lost & Found';
    else
      return str.replace(new RegExp('_', "g"),' ')
  						.replace(/(\w)(\w*)/g, (_, i, r) => i.toUpperCase() + (r != null ? r : ""));
  }

  trim(s: string) {
    if(s.length <= this.maxbody)
        return s;
    else {
        let t = s.slice(0,this.maxbody+1);
        return t.slice(0,t.lastIndexOf(' ')) + '...';
    }
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
