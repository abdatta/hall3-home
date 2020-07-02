import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import * as moment from 'moment';

import { InfoService } from '../../../../services/info/info.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})


export class SinglePageComponent implements OnInit {

  alumnus: object;
  loaded = false;
  // loaded2 = false;

  constructor(private infoService: InfoService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.loaded = false;
        console.log(this.loaded);
        this.infoService.getOneAlumnus(params['id']).subscribe((d: object) => {
          if (d.hasOwnProperty('err')) {
            this.alumnus = {};
          } else {
            this.alumnus = d['info'][0];
            this.loaded = true;
            console.log(this.alumnus);
            console.log(this.loaded);
          }
        });
      });
  
      // this.infoService.getTopNews()
      //     .subscribe((d: object[]) => {
      //       if (d.length > 0 && d[0].hasOwnProperty('err')) {
      //         this.latestNews = [{}];
      //       } else {
      //         this.latestNews = d;
      //         this.loaded2 = true;
      //       }
      //     });
    }
  
    preProcess(plainText: string): string {
      // URLs starting with http://, https://, or ftp://
      const  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
      let replacedText = plainText.replace(replacePattern1, '<a href="$1" class="autolink" target="_blank">$1</a>');
  
      // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
      const replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" class="autolink" target="_blank">$2</a>');
  
      // Change email addresses to mailto:: links.
      const replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
      replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1" class="autolink">$1</a>');
  
      return replacedText;
    }
  
    getFormattedDate(date: string) {
      return moment(date).format('MMM DD, YYYY');
    }
  
    isURL(str: string): boolean {
      const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d%_.~+=-]*)?$', 'i'); // fragment locator
      return pattern.test(str);
    }
  
    isInternalURL(str: string): boolean {
      return str.startsWith('http://hall3iitk.com');
    }
  
    getInternalRoute(str: string): string {
      return str.replace('http://hall3iitk.com', '');
    }
}
  