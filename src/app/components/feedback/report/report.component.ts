import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FeedbackService } from '../../../services/feedback/feedback.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  status = 0;

  constructor(private feedbackService: FeedbackService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.feedbackService.reportQuery(params['id'])
          .subscribe((status: number) => {
            this.status = status;
          });
    });
  }

}
