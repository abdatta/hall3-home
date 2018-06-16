import { Component, OnInit, Input } from '@angular/core';
import  { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-hec',
  templateUrl: './hec.component.html',
  styleUrls: ['./hec.component.css']
})
export class HecComponent implements OnInit {
  loaded = false;
  title: string;
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('hec');
    this.infoService.getAdministration('hec')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.members = [{}];
          this.loaded = true;
        } else {
          this.title = d['title'];
          this.members = d['info'];
        }
        this.loaded = true;
      });
  }
}
