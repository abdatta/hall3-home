import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback/feedback.service';

@Component({
  selector: 'app-lnf',
  templateUrl: './lnf.component.html',
  styleUrls: ['./lnf.component.css']
})
export class LnfComponent implements OnInit {

	sending = false;
	sent = false;

	error = false;
	
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  lnfsend(what: string, when: string, where: string, des: string, link: string, yname: string, phone: string, room: string, type: string, form: any) {
    this.sending = true;
    this.feedbackService.sendlnf({
      what: what,
      when: when,
      where: where,
      des: des,
      link: link,
      contact: yname + (phone == ''?'':', '+phone) + ', Room No. '+room,
      type: (type === 'found')
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
