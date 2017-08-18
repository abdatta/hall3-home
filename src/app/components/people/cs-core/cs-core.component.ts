import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-cs-core',
  templateUrl: './cs-core.component.html',
  styleUrls: ['./cs-core.component.css']
})
export class CsCoreComponent implements OnInit {
  loaded = false;
  title: string;
  coordis: object[];
  ops: object[];
  acads: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('cs-core');
    this.infoService.getPeople('cs-core')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.coordis = [{}];
          this.ops = [{}];
          this.acads = [{}];
          this.loaded = true;
        } else {
          this.title = d['title'];
          this.coordis = d['coordi'];
          this.ops = d['ops'];
          this.acads = d['acads'];
        }
        this.loaded = true;
      });
  }
}
