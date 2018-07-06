import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { TilesComponent } from '../../tiles/tiles.component';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-hec',
  templateUrl: './hec.component.html',
  styleUrls: ['./hec.component.css']
})
export class HecComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(TilesComponent) tiles: TilesComponent;
  loaded = false;
  editable = false;
  title: string;
  editors: string[] = [];
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAdministrationInfo('hec')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.members = [{}];
          this.loaded = true;
        } else {
          this.title = d['title'];
          this.members = d['info'];
          this.editors = d['editors'];
        }
        this.loaded = true;
      });
  }

   save(diff: object[]) {
    this.infoService.updateAdministrationInfo('hec', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }
}
