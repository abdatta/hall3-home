import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from '../../../services/news/news.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  checks = {
    'all': false,
    'announcements': false,
    'lnf': false,
    'minutes': false,
    'other_documents': false
  }

  submitted = false;
  success = 0;

  id: string;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if(!params['id'])
        this.router.navigateByUrl('/');
      this.id = params['id'];
      if(params['cat'])
        this.checks[params['cat']] = true;
    });
  }

  onchange(val: string) {
    if (val === 'all') {
      this.checks.announcements = this.checks[val];
      this.checks.minutes = this.checks[val];
      this.checks.other_documents = this.checks[val];
    } else {
      if (!this.checks[val]) {
        this.checks.all = false;
      } else if (this.checks.announcements && this.checks.minutes && this.checks.other_documents) {
        this.checks.all = true;
      }
    }
  }

  unsubscribe() {
    this.submitted = true;
    for(let cat in this.checks) {
      if (cat === 'all')
        continue;
      if(!this.checks[cat]) {
        this.success++;
        continue;
      }
      this.newsService.unsubscribe(cat, this.id)
          .subscribe((s: number) => {
            if (s === 200) {
              this.success++;
            } else {
            }
          });
    }
  }
}
