import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-wardens',
  templateUrl: './wardens.component.html',
  styleUrls: ['./wardens.component.css']
})
export class WardensComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  loaded = false;
  editable = false;
  saving = false;
  title: string;
  members: object[];
  images: string[] = [];
  edited: boolean[];
  backup: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAdministrationInfo('wardens')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.members = [{}];

          this.loaded = true;
        } else {
          this.title = d['title'];
          this.members = d['info'];
          this.images = this.members.map(member => member['photo']);
          this.edited = [false, false, false];
        }
      });
  }

  load() {
    this.images.pop();
    if (this.images.length === 0) {
      this.loaded = true;
    }
  }

  edit() {
    this.editable = true;
    this.backup = JSON.parse(JSON.stringify(this.members));
  }

  save() {
    this.saving = true;
    const diff = this.members.map((warden, i) => {
      return {
        'type': 'E',
        'index': i,
        'from':  this.backup[i],
        'to':    warden
      }
    }).filter((e, i) => this.edited[i]);
    this.infoService.updateAdministrationInfo('wardens', diff)
      .subscribe((s: number) => {
        this.saving = false;
        this.head.saved(s === 200);
        if (s === 200) { this.editable = false; }
        this.edited = [false, false, false];
    });
  }

  discard() {
    this.editable = false;
    this.members = this.backup;
    this.edited = [false, false, false];
  }

}
