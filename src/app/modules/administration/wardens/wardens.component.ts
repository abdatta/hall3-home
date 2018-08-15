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
  editors: string[] = [];
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
          this.editors = d['editors'];
          this.images = this.members.map(member => member['photo']);
          this.edited = [false, false, false];
        }
      });
  }

  ngxCropperConfig(i: number) {
    return {
      url: '/server/info/upload', // image server url
      maxsize: 512000, // image max size, default 500k = 512000bit
      title: 'Crop Image', // edit modal title, this is default
      uploadBtnName: '<span class="ti-upload"></span>&nbsp;UPLOAD', // default Upload Image
      uploadBtnClass: 'upload', // default bootstrap styles, btn btn-primary
      cancelBtnName: 'Cancel', // default Cancel
      cancelBtnClass: 'bttn', // default bootstrap styles, btn btn-default
      applyBtnName: 'Apply', // default Apply
      applyBtnClass: 'bttn', // default bootstrap styles, btn btn-primary
      fdName: 'image', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
      _aspectRatio: i === 0 ? (47 / 60) : (1 / 1), // default 1 / 1, for example: 16 / 9, 4 / 3 ...
      get aspectRatio() {
        return this._aspectRatio;
      },
      set aspectRatio(value) {
        this._aspectRatio = value;
      },
      viewMode: 1 // default 0, value can be 0, 1, 2, 3
    };
  }

  onUpload(data: any, i: number) {
    data = JSON.parse(data);
    if (data['code'] === 2000) {
      this.members[i]['photo'] = data['data']['url'];
      this.edited[i] = true;
    }
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

  emailChanged(val, i) {
    this.members[i]['email'] = val + '@iitk.ac.in';
    this.edited[i] = true;
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
