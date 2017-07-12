import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-sg',
  templateUrl: './sg.component.html',
  styleUrls: ['./sg.component.css']
})
export class SGComponent implements OnInit {
  loaded = false;
  title: string;
  sgs: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('sg');
    this.infoService.getPeople('sg')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.sgs = [{}];
        } else {
          this.title = d['title'];
          this.sgs = d['sgs'];
        }
        this.loaded = true;
      });
  }
}
