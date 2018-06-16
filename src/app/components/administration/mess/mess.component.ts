import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {
  loaded = false;
  title: string;
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('mess');
    this.infoService.getAdministration('mess')
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
