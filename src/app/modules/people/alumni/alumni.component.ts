import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { AlumniTilesComponent } from "./alumni-tiles/alumni-tiles.component";

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(AlumniTilesComponent) tiles: AlumniTilesComponent;
  loaded = false;
  editors: string[] = [];
  alumni: object[];
  maxchars = 700;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getPeopleInfo('alumni')
      .subscribe((d: object[]) => {
        if ( d.hasOwnProperty('err')) {
          console.log(d['err']);
        }
        this.alumni = d['info'];
        this.editors = d['editors'];
        this.loaded = true;
      });
  }

  save(diff: object[]) {
    this.infoService.updatePeopleInfo('alumni', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }

}


