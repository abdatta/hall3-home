import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { TilesComponent } from '../../tiles/tiles.component';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-am',
  templateUrl: './am.component.html',
  styleUrls: ['./am.component.css']
})
export class AMComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(TilesComponent) tiles: TilesComponent;
  loaded = false;
  ams: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getPeopleInfo('am')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          console.log(d['err']);
        }
        this.ams = d['info'];
        this.loaded = true;
      });
  }

  save(diff: object[]) {
    this.infoService.updatePeopleInfo('am', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }
}
