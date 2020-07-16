import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { InfoheadComponent } from 'app/modules/infohead/infohead.component';
import { NewsService } from 'app/services/news/news.service';

@Component({
  selector: 'app-mail-group-editor',
  templateUrl: './mail-group-editor.component.html',
  styleUrls: ['./mail-group-editor.component.css']
})
export class MailGroupEditorComponent implements OnInit {

  @Input() title = '';
  @Input() emails = [] as string[];
  new_emails = '';
  @Output() delete = new EventEmitter<boolean>();

  @ViewChild(InfoheadComponent) head: InfoheadComponent;

  backup: {
    title: string,
    emails: string[]
  };

  editing = false;
  @Input('editing') set set_editing(flag: boolean) {
    if (flag) {
      this.edit();
    }
  }

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  edit() {
    this.editing = true;
    this.backup = {
      title: this.title,
      emails: JSON.parse(JSON.stringify(this.emails))
    };
  }

  save() {
    if (!this.title) {
      return this.head.saved(false, 'Empty mail group name!');
    }
    this.newsService.upsertMailList(this.title, this.emails)
        .subscribe((s: number) => {
          if (s === 200) {
            this.editing = false;
            this.backup = null;
            this.head.saved(true);
          } else {
            this.head.saved(false);
          }
        });
  }

  discard() {
    this.editing = false;
    this.title = this.backup.title;
    this.emails = this.backup.emails;
    if (!this.emails || this.emails.length === 0) {
      this.delete.emit(false);
    }
  }

  addEmails() {
    const re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    // extract all emails present in the string input
    let extract_emails = this.new_emails.match(re) || [];
    // remove repeated emails from the input
    extract_emails = extract_emails.filter((email, i) => extract_emails.indexOf(email) === i);
    // filter only new emails that were not already present
    extract_emails = extract_emails.filter(email => this.emails.indexOf(email) === -1);
    this.emails.push(...extract_emails);
    this.new_emails = '';
  }

  remove(i: number) {
    this.emails.splice(i, 1);
  }
}
