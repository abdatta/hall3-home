import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  _tiles: object[];
  photos: object = {};

  @Input() set tiles(data: object[]) {
    if(data) {
      this._tiles = this.rearrange(data);
    }
  }

  constructor() { }

  ngOnInit() { }

  private rearrange(tiles: object[]): object[] {
    let newtiles: object[] = [];
    for(let i=0; i<tiles.length; i++) {
      let row: object[] = [];
      for(let j=0; j<4 && i<tiles.length; j++,i++) {
        let tile: object = {};
        tile['name'] = tiles[i]['name'];
        delete tiles[i]['name'];
        if(tiles[i].hasOwnProperty('photo')) {
          this.photos[tiles[i]['photo']] = true;
          tile['photo'] = tiles[i]['photo'];
          delete tiles[i]['photo'];
        }
        tile['data'] = [];
        for(let key in tiles[i]) {
          tile['data'].push(tiles[i][key]);
        }

        row.push(tile);
      }
      newtiles.push(row);
      i--;
    }
    return newtiles;
  }

  load(photo: string) {
    this.photos[photo] = null;
    delete this.photos[photo];
  }

}
