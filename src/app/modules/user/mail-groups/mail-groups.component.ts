import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/services/news/news.service';

@Component({
  selector: 'app-mail-groups',
  templateUrl: './mail-groups.component.html',
  styleUrls: ['./mail-groups.component.css']
})
export class MailGroupsComponent implements OnInit {

  mail_lists: {
      list_name: string,
      emails: string[],
      new?: boolean
    }[] = [];

  new_mail_list_name: string;

  error: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getMailLists()
        .subscribe(mail_lists => {
          if (mail_lists.length > 0 && mail_lists[0].hasOwnProperty('err')) {
            this.mail_lists = [];
          } else {
            this.mail_lists = mail_lists as { list_name: string; emails: string[]; }[];
            // this.loaded = true;
          }
        });
  }

  new_group() {
    if (!this.new_mail_list_name) {
      this.error = 'Required';
      return;
    }
    if (this.mail_lists.map(ml => ml.list_name).indexOf(this.new_mail_list_name) !== -1) {
      this.error = 'Already Exists';
      return;
    }
    this.error = '';
    this.mail_lists.push({
      list_name: this.new_mail_list_name,
      emails: [],
      new: true
    });
    this.new_mail_list_name = '';
  }

  delete(i: number, fromServer: boolean) {
    if (fromServer) {
      const to_be_deleted = this.mail_lists.splice(i, 1);
      this.newsService.deleteMailList(to_be_deleted[0].list_name)
          .subscribe((s: number) => {
            if (s === 200) {
              // code for delete successful
            } else {
              // code for delete unssucessful
              this.mail_lists.splice(i, 0, ...to_be_deleted);
            }
          });
    } else {
      // delete only if it is new
      if (this.mail_lists[i].new) {
        this.mail_lists.splice(i, 1);
      }
    }
  }

}
