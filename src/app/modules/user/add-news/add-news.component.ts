import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from '../../../services/news/news.service';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../models/user';
import { MultiSelectComponent } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit, AfterViewInit {

  user: User;
  submitted = false;
  data = {
    'to': '',
    'head': '',
    'body': '',
    'cat': '',
    'link': ''
  };

  targetAudienceList = [];
  selectedtargetAudience = [];
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'text',
    selectAllText: 'All',
    unSelectAllText: 'All',
    // itemsShowLimit: 3,
    // allowSearchFilter: true
  };
  selectTouched: boolean;
  focusOnToComp: boolean;
  @ViewChild('to', {read: ElementRef}) toElement: ElementRef;
  @ViewChild('to', {read: MultiSelectComponent}) toComponent: MultiSelectComponent;

  constructor(private newsService: NewsService,
              private loginService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.newsService.getMailLists(true)
      .subscribe(mail_lists => {
        if (mail_lists.length > 0 && mail_lists[0].hasOwnProperty('err')) {
          this.targetAudienceList = [];
        } else {
          this.targetAudienceList = mail_lists.map(list => ({ id: list['list_name'], text: list['list_name'] }));
          // this.loaded = true;
        }
      });
    this.loginService.getUser()
        .then((user: User) => {
          this.user = user;
        });
    this.route.queryParams.subscribe((params: Params) => {
      if (params['head']) { this.data['head'] = params['head']; }
      if (params['to']) { this.data['to'] = params['to']; }
      if (params['cat']) { this.data['cat'] = params['cat']; }
      if (params['link']) { this.data['link'] = params['link']; }
      if (params['body']) { this.data['body'] = params['body']; }
    });
  }

  ngAfterViewInit() {
    this.toElement.nativeElement.firstChild.firstChild.firstChild.onfocus = (e) => this.focusOnToComp = true;
    this.toElement.nativeElement.firstChild.firstChild.firstChild.onblur = (e) => this.focusOnToComp = false;
  }

  passFocus(event) {
    if (event.srcElement !== this.toElement.nativeElement ||
        event.relatedTarget === this.toElement.nativeElement.firstChild.firstChild.firstChild) {
      console.log('Not passing focus.');
      return;
    }
    event.srcElement.firstChild.firstChild.firstChild.focus();
  }

  loseFocus() {
    this.toComponent.closeDropdown();
    this.toElement.nativeElement.focus();
  }

  keyupToggle(event) {
    if (this.focusOnToComp) {
      this.toComponent.toggleDropdown(event);
    }
  }

  onItemSelect(items) {
    // console.log(items);
    // console.log('Selected Before: ', this.selectedtargetAudience);
    // setTimeout(() => console.log('Selected After: ', this.selectedtargetAudience), 500);
  }

  addNews(head: string, link: string, cat: string, body: string) {
    this.submitted = true;
    this.newsService.addNews({
      'by': this.user.name,
      'to': this.selectedtargetAudience.join(' '),
      'head': head,
      'body': body,
      'category': cat.split(' '),
      'link': link
    }).subscribe((s: number) => {
        if (s === 200) {
          this.router.navigateByUrl('/');
          this.submitted = false;
        } else {
          this.submitted = false;
        }
      });
  }
}
