import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  @Input() justify = 'center';
  @Input() fadeIn: (number) => number = i => null;
  @Output('save') saver = new EventEmitter<object[]>();
  editable = false;
  saving = false;
  sureDel = -1;
  _tiles: object[];
  photos: string[] = [];
  backup: object[];
  history: object[];

  @Input() set tiles(data: object[]) {
    if(data) {
     this._tiles = data;
     this.photos = this._tiles.map(tile => tile['photo']);
     this._tiles.map(tile => tile['edited'] = false);
     this.history = [];
    }
  }

  constructor() { }

  ngOnInit() { }

  moreKeys(obj: object) {
    let keys = Object.keys(obj);
    if(keys.indexOf('name') !== -1) keys.splice(keys.indexOf('name'), 1);
    if(keys.indexOf('photo') !== -1) keys.splice(keys.indexOf('photo'), 1);
    return keys;
  }

  prev(i: number) {
    this._tiles.splice(i-1, 2, this._tiles[i], this._tiles[i-1]);
    this.sureDel = -1;
    this.updateHistory({
      'type': 'M',
      'from': i,
      'to': i-1
    });
  }

  next(i: number) {
    this._tiles.splice(i, 2, this._tiles[i+1], this._tiles[i]);
    this.sureDel = -1;
    this.updateHistory({
      'type': 'M',
      'from': i,
      'to': i+1
    });
  }

  change(val: any, i: number, source: string, j?: number) {
    let from: object;
    if(!this._tiles[i]['edited']) {
      from = JSON.parse(JSON.stringify(this._tiles[i]));
      delete from['edited'];
    }

    if(source === 'more')
      this._tiles[i]['more'][j] = val;
    else
      this._tiles[i][source] = val;

    if(!this._tiles[i]['edited']) {
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
    let newtile = {
      name:'',
      more: new Array(this._tiles[0]['more'].length)
    };
    if(this._tiles[0].hasOwnProperty('photo'))
      newtile['photo'] = '/files/default.jpg';
    this._tiles.push(newtile);

    newtile['edited'] = true;
    this.updateHistory({
      'type': 'A',
      'item': newtile
    });
  }

  del(i: number) {
    if(this.sureDel === i) {
      this._tiles.splice(i, 1);
      this.sureDel = -1;
      this.updateHistory({
        'type': 'D',
        'index': i
      });
    }
    else
    {
      this.sureDel = i;
      setTimeout(() => {
        if(this.sureDel === i)
          this.sureDel = -1;
      }, 3000);
    }
  }

  load(i: number) {
    if(i !== -1)
      this.photos.splice(i,1);
  }

  edit() {
    this.editable = true;
    this.backup = JSON.parse(JSON.stringify(this._tiles));
    this.history = [];
  }

  save() {
    this.saving = true;
    this._tiles.map(tile => delete tile['edited']);
    this.saver.emit(this.history);console.log(JSON.stringify(this.history,null,2));
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

  updateHistory(change: object) {
    if(this.history.length === 0)
      this.history.push(change);
    else {
      let last = this.history[this.history.length-1];
      switch (change['type']) {
        case 'M':
          if(last['type'] === 'M' && last['to'] === change['from'])
            last['to'] = change['to'];
          else if(last['type'] === 'M' && last['to'] === change['to'])
            last['to'] = change['from'];
          else
            this.history.push(change);
          if(last['type'] === 'M' && last['from'] === last['to'])
            this.history.pop();
          break;

        case 'E':
          this.history.push(change);
          break;

        case 'A':
          this.history.push(change);
          break;

        case 'D':
          if(change['index'] === this._tiles.length && last['type'] === 'A')
            this.history.pop();
          else
            this.history.push(change);
          break;
        default:
          // code...
          break;
      }
    }
  }

}
