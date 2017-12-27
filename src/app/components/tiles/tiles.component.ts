import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  @Input() justify = 'center';
  @Input() fadeIn: (number) => number = i => null;
  _tiles: object[];
  photos: string[] = [];

  @Input() set tiles(data: object[]) {
    if(data) {
     this._tiles = data;
     this.photos = this._tiles.map(tile => tile['photo']);
    }
  }

  constructor() { }

  ngOnInit() { }

  moreData(obj: object) {
    let keys = Object.keys(obj);
    if(keys.indexOf('name') !== -1) keys.splice(keys.indexOf('name'), 1);
    if(keys.indexOf('photo') !== -1) keys.splice(keys.indexOf('photo'), 1);
    return keys.map(key => obj[key]);
  }

  load(i: number) {
    if(i !== -1)
      this.photos.splice(i,1);
  }

}
