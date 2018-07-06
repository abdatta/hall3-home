import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback/feedback.service';
import { InfoService } from '../../../services/info/info.service';


@Component({
  selector: 'app-ath',
  templateUrl: './ath.component.html',
  styleUrls: ['./ath.component.css']
})
export class AthComponent implements OnInit {

  sent = false;
  sending = false;
  anonymous = false;
  placeholder = 'Loading list of HECs...';
  hecs = [];
  error = false;

  constructor(private feedbackService: FeedbackService,
              private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAdministrationInfo('hec')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.placeholder = 'Some Error Occurred. Please reload the page.';
          this.hecs = [];
        } else {
          this.placeholder = 'Choose the HEC member to ask';
          d['info'].forEach(hec => {
            if (this.hecs.indexOf(hec['post']) === -1) {
              this.hecs.push(hec['post']);
            }
          })
        }
      });
  }

  askTheHEC(name: string, to: string, subject: string, message: string, email: string, form: any) {
    this.sending = true;
    this.feedbackService.askQuery({
      'name': (this.anonymous) ? 'Anonymous' : name,
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
