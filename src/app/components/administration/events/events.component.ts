import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  loaded = false;
  title: string;
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('events');
    this.infoService.getAdministration('activity')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.members = [{}];
        } else {
          this.title = d['title'];
          this.members = d['info'];
        }
        this.loaded = true;
      });
  }
}
