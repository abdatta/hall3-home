import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { TilesComponent } from '../../tiles/tiles.component';

@Component({
  selector: 'app-sg',
  templateUrl: './sg.component.html',
  styleUrls: ['./sg.component.css']
})
export class SGComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(TilesComponent) tiles: TilesComponent;
  loaded = false;
  sgs: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getPeopleInfo('sg')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err'))
          console.log(d['err']);
        this.sgs = d['info'];
        this.loaded = true;
      });
  }

  save(diff: object[]) {
    this.infoService.updatePeopleInfo('sg', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }
}
