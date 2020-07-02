import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { NgxCropperOption } from 'ngx-cropper';

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
  images: string[] = [];
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
     this.images = this._tiles.map(tile => tile['image']);
     this._tiles.map(tile => tile['edited'] = false);
     this.history = [];
    }
  }

  constructor() { }

  ngOnInit() { }

  onUpload(data: any, i: number) {
    data = JSON.parse(data);
    if (data['code'] === 2000) {
      this.change(data['data']['url'], i, 'image');
    }
  }

  moreKeys(obj: object) {
    const keys = Object.keys(obj);
    if (keys.indexOf('name') !== -1) { keys.splice(keys.indexOf('name'), 1); }
    if (keys.indexOf('image') !== -1) { keys.splice(keys.indexOf('image'), 1); }
    return keys;
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


  preProcess(plainText: string): string {
    // URLs starting with http://, https://, or ftp://
    const  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    let replacedText = plainText.replace(replacePattern1, '<a href="$1" class="autolink" target="_blank">$1</a>');

    // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    const replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" class="autolink" target="_blank">$2</a>');

    // Change email addresses to mailto:: links.
    const replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1" class="autolink">$1</a>');

    return replacedText;
  }

  trim(s: string) {
    if (s.length <= this.maxbody) {
        return s;
    } else {
        const t = s.slice(0, this.maxbody + 1);
        return t.slice(0, t.lastIndexOf(' ')) + '...';
    }
  }

  load(i: number) {
    if (i !== -1) {
      this.images.splice(i, 1);
    }
  }

  edit() {
    this.editable = true;
    this.backup = JSON.parse(JSON.stringify(this._tiles));
    this.history = [];
    console.log(this.editable);
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

    if (source === 'more') {
      this._tiles[i]['more'][j] = val.trim();
    } else {
      this._tiles[i][source] = val.trim() + (source === 'email' ? '@iitk.ac.in' : '');
    }

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

  add() {
    const newtile = {
      name: '',
      image: null,
      batch:'',
      content:''
    };
    if (this.backup[0] && this.backup[0].hasOwnProperty('image')) {
      newtile['image'] = null;
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
