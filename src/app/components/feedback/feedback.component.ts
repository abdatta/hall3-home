import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { FeedbackService } from '../../services/feedback/feedback.service';
import { Query } from '../../models/query';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form = 'ask';
  error: string = null;
  sending = false;
  sent = false;
  anonymous = false;
  responded = true;
  responses = {
    responded: [],
    notresponded: []
  };
  loading = true;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  changeForm(nextForm: string) {
    this.form = nextForm;
    if (nextForm === 'response') {
      this.responded = true;
      this.feedbackService.getResponses()
          .subscribe((q: Query[]) => {
            if (q.hasOwnProperty('err')) {
              this.error = q['err'];
            } else {
              this.responses.responded = [];
              this.responses.notresponded = [];
              q.slice().reverse().forEach((response: Query) => {
                response['date'] = moment(response['date']).format('DD\xa0MMM YY');
                if(response['responded']) {
                  this.responses.responded.push(response);
                } else {
                  this.responses.notresponded.push(response);
                }
              });
            }
            this.loading = false;
          });
    }
  }

  showForm(thisForm: string): boolean {
    return (this.form === thisForm);
  }

  askTheHEC(name: string, to: string, subject: string, message: string, email: string, form: any) {
    this.sending = true;
    this.feedbackService.askQuery({
      'name': (this.anonymous)?'Anonymous':name,
      'to': to,
      'subject': subject,
      'message': message,
      'email': email
    }).subscribe((s: number) => {
        if (s !== 200) {
          this.error = 'Error: ' + s;
        } else {
          this.sent = true;
          this.anonymous = false;
          form.reset();
        }
        this.sending = false;
      });
  }

  preProcess(plainText: string): string {
    //URLs starting with http://, https://, or ftp://
    const  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    let replacedText = plainText.replace(replacePattern1, '<a href="$1" class="autolink" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    const replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" class="autolink" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    const replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1" class="autolink">$1</a>');

    return replacedText;
  }

  lnfsend(what: string, when: string, where: string, des: string, link: string, contact: string, type: string, form: any) {
    this.sending = true;
    this.feedbackService.sendlnf({
      what: what,
      when: when,
      where: where,
      des: des,
      link: link,
      contact: contact,
      type: (type === 'found')
    }).subscribe((s: number) => {
        if (s !== 200) {
          this.error = 'Error: ' + s;
        } else {
          this.sent = true;
          form.reset();
        }
        this.sending = false;
      });
  }
}
