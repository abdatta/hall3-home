import { Component, OnInit } from '@angular/core';

import { FeedbackService } from '../../services/feeback/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form = 'ask';
  query = {
    'name': '',
    'to': '',
    'subject': '',
    'message': '',
    'email': ''
  };
  error: string = null;
  sending = false;
  sent = false;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  changeForm(nextForm: string) {
    this.form = nextForm;
  }

  showForm(thisForm: string): boolean {
    return (this.form === thisForm);
  }

  askTheHEC(form) {
    this.sending = true;
    this.feedbackService.askQuery(this.query)
      .subscribe((s: number) => {
        if (s !== 200) {
          this.error = 'Error: ' + s;
        } else {
          this.query = {
            'name': '',
            'to': '',
            'subject': '',
            'message': '',
            'email': ''
          };
          this.sent = true;
        }
        this.sending = false;
      });
  }
}
