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
  coordi: object[];
  ops: object[];
  acads: object[];
  images: string[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('cs-core');
    this.infoService.getPeople('cs-core')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.coordi = [{}];
          this.ops = [{}];
          this.acads = [{}];
          this.loaded = true;
        } else {
          this.title = d['title'];
          this.coordi = d['coordi'];
          this.ops = d['ops'];
          this.acads = d['acads'];
          this.coordi.forEach((member) => {
            this.images.push(member['photo']);
          });
          this.ops.forEach((member) => {
            this.images.push(member['photo']);
          });
          this.acads.forEach((member) => {
            this.images.push(member['photo']);
          });
        }
      });
  }
  load() {
    this.images.pop();
    if (this.images.length === 0) {
      this.loaded = true;
    }
  }
}
