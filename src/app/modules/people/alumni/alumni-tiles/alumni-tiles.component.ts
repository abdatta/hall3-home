import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { NgxCropperOption } from 'ngx-cropper';
import * as removeMd from 'remove-markdown';

@Component({
  selector: 'app-alumni-tiles',
  templateUrl: './alumni-tiles.component.html',
  styleUrls: ['./alumni-tiles.component.css']
})
export class AlumniTilesComponent implements OnInit {

  @Input() justify = 'center';
  @Input() maxbody = 120;
  @Output('save') saver = new EventEmitter<object[]>();
  editable = false;
  saving = false;
  sureDel = -1;
  _tiles: object[];
  photos: string[] = [];
  backup: object[];
  history: object[];
  ngxCropperConfig: NgxCropperOption = {
    url: 'server/info/upload', // image server url
    maxsize: 512000, // image max size, default 500k = 512000bit
    title: 'Crop Image', // edit modal title, this is default
    uploadBtnName: '<span class="ti-upload"></span>&nbsp;UPLOAD', // default Upload Image
    uploadBtnClass: 'upload', // default bootstrap styles, btn btn-primary
    cancelBtnName: 'Cancel', // default Cancel
    cancelBtnClass: 'bttn', // default bootstrap styles, btn btn-default
    applyBtnName: 'Apply', // default Apply
    applyBtnClass: 'bttn', // default bootstrap styles, btn btn-primary
    fdName: 'image', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
    aspectRatio: 1 / 1, // default 1 / 1, for example: 16 / 9, 4 / 3 ...
    viewMode: 1 // default 0, value can be 0, 1, 2, 3
  };

  @Input() fadeIn: (number) => number = i => null;
  @Input() set tiles(data: object[]) {
    if (data) {
     this._tiles = data;
     this.photos = this._tiles.map(tile => tile['photo']);
     this._tiles.map(tile => tile['edited'] = false);
     this.history = [];
    }
  }

  constructor() { }

  ngOnInit() { }

  onUpload(data: any, i: number) {
    data = JSON.parse(data);
    if (data['code'] === 2000) {
      this.change(data['data']['url'], i, 'photo');
    }
  }

  prev(i: number) {
    this._tiles.splice(i - 1, 2, this._tiles[i], this._tiles[i - 1]);
    this.sureDel = -1;
    this.updateHistory({
      'type': 'M',
      'from': i,
      'to': i - 1
    });
  }

  next(i: number) {
    this._tiles.splice(i, 2, this._tiles[i + 1], this._tiles[i]);
    this.sureDel = -1;
    this.updateHistory({
      'type': 'M',
      'from': i,
      'to': i + 1
    });
  }

  trim(s: string) {
    if (s.length <= this.maxbody) {
        return removeMd(s);
    } else {
        const t = s.slice(0, this.maxbody + 1);
        return removeMd(t.slice(0, t.lastIndexOf(' ')) + '...');
    }
  }

  load(i: number) {
    if (i !== -1) {
      this.photos.splice(i, 1);
    }
  }

  edit() {
    this.editable = true;
    this.backup = JSON.parse(JSON.stringify(this._tiles));
    this.history = [];
  }

  save() {
    this.saving = true;
    this._tiles.map(tile => delete tile['edited']);
    this.saver.emit(this.history);
  }
  saved(success: boolean) {
    this.saving = false;
    this.editable = !success;
  }
  
  discard(): Object[] {
    this.editable = false;
    this.sureDel = -1;
    this._tiles = this.backup;
    this.history = [];
    return this._tiles;
  }

  trackByFn(index: any, item: any) {
    return index;
   }

  change(val: any, i: number, source: string, j?: number) {
    let from: object;
    if (!this._tiles[i]['edited']) {
      from = JSON.parse(JSON.stringify(this._tiles[i]));
      delete from['edited'];
    }

    this._tiles[i][source] = val.trim();
    
    if (!this._tiles[i]['edited']) {
      this._tiles[i]['edited'] = true;
      this.updateHistory({
        'type': 'E',
        'index': i,
        'from': from,
        'to': this._tiles[i]
      });
    }
  }

  objectidgenerator () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  };

  add() {
    const newtile = {
      id: '',
      name: '',
      photo: null,
      batch:'',
      content:''
    };
    if (this.backup[0] && this.backup[0].hasOwnProperty('photo')) {
      newtile['photo'] = null;
    }
    if (this.backup[0] && this.backup[0].hasOwnProperty('name')) {
      newtile['name'] = '';
    }
    if (this.backup[0] && this.backup[0].hasOwnProperty('batch')) {
      newtile['batch'] = '';
    }
    if (this.backup[0] && this.backup[0].hasOwnProperty('content')) {
      newtile['content'] = '';
    }
    newtile['id'] = this.objectidgenerator();
    this._tiles.push(newtile);

    newtile['edited'] = true;
    this.updateHistory({
      'type': 'A',
      'item': newtile
    });
  }

  del(i: number) {
    if (this.sureDel === i) {
      this._tiles.splice(i, 1);
      this.sureDel = -1;
      this.updateHistory({
        'type': 'D',
        'index': i
      });
    } else {
      this.sureDel = i;
      setTimeout(() => {
        if (this.sureDel === i) {
          this.sureDel = -1;
        }
      }, 3000);
    }
  }

  updateHistory(change: object) {
    if (this.history.length === 0) {
      this.history.push(change);
    } else {
      const last = this.history[this.history.length - 1];
      switch (change['type']) {
        case 'M':
          if (last['type'] === 'M' && last['to'] === change['from']) {
            last['to'] = change['to'];
          } else if (last['type'] === 'M' && last['to'] === change['to']) {
            last['to'] = change['from'];
               } else {
            this.history.push(change);
               }
          if (last['type'] === 'M' && last['from'] === last['to']) {
            this.history.pop();
          }
          break;

        case 'E':
          this.history.push(change);
          break;

        case 'A':
          this.history.push(change);
          break;

        case 'D':
          if (change['index'] === this._tiles.length && last['type'] === 'A') {
            this.history.pop();
          } else {
            this.history.push(change);
          }
          break;
        default:
          // code...
          break;
      }
    }
  }

}
