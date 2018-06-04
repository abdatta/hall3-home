import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback/feedback.service';

@Component({
  selector: 'app-ath',
  templateUrl: './ath.component.html',
  styleUrls: ['./ath.component.css']
})
export class AthComponent implements OnInit {

	sent = false;
	sending = false;
	anonymous = false;

	error = false;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
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
          this.error = true;
        } else {
          this.error = false;
          this.sent = true;
          form.reset();
        }
        this.sending = false;
      });
  }

}
