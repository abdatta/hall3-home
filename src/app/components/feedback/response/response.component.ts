import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

import { FeedbackService } from '../../../services/feedback/feedback.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  queryInfo = {
    'id': '',
    'name': '',
    'to': '',
    'subject': '',
    'message': '',
    'email': ''
  };

  response = '';
  sending = false;
  error = false;

  constructor(private feedbackService: FeedbackService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.feedbackService.getQuery(params['id'])
        .subscribe((q: object) => {
          if (q.hasOwnProperty('err')) {
            this.error = true;
          } else {
            this.queryInfo = {
              'id': params['id'],
              'name': q['name'],
              'to': q['to'],
              'subject': q['subject'],
              'message': q['message'],
              'email': q['email']
            };
          }
        });
    });
  }

  respond() {
    this.sending = true;
    this.feedbackService.respondQuery(this.response, this.queryInfo.id)
      .subscribe((s: number) => {
        if (s === 200) {
          this.router.navigateByUrl('/');
        }
        this.sending = false;
      });
  }

}
