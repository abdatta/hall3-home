import { Component, OnInit } from '@angular/core';

import { FeedbackService } from '../../services/feedback/feedback.service';

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

  responses = [{}];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getResponses()
        .subscribe((q: object[]) => {
          if (q.hasOwnProperty('err')) {
            this.error = q['err'];
          } else {
            this.responses = q.slice().reverse();
          }
        });
  }

  changeForm(nextForm: string) {
    this.form = nextForm;
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
          form.reset();
        }
        this.sending = false;
      });
  }
}
