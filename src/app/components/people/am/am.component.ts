import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-am',
  templateUrl: './am.component.html',
  styleUrls: ['./am.component.css']
})
export class AMComponent implements OnInit {
  loaded = false;
  title: string;
  ams: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('am');
    this.infoService.getPeople('am')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.ams = [{}];
        } else {
          this.title = d['title'];
          this.ams = d['ams'];
        }
        this.loaded = true;
      });
  }
}
