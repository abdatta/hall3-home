import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { TilesComponent } from '../../tiles/tiles.component';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(TilesComponent) tiles: TilesComponent;
  loaded = false;
  title: string;
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAdministrationInfo('maintenance')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.members = [{}];
        } else {
          this.title = d['title'];
          this.members = d['info'];
        }
        this.loaded = true;
      });
  }

  save(diff: object[]) {
    this.infoService.updateAdministrationInfo('maintenance', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }
}
