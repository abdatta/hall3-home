import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { TilesComponent } from '../../tiles/tiles.component';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(TilesComponent) tiles: TilesComponent;
  loaded = false;
  title: string;
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAdministrationInfo('advisory')
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
    this.infoService.updateAdministrationInfo('advisory', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }

  /* Function to put all extra info into a `more` array.
  more(obj: Object[]) {
    let mobj = [];
    for(let i=0; i<obj.length; i++) {
      let nobj = { name: '', more: [] };
      for(let key in obj[i]) {
        if(key === 'name')
          nobj['name'] = obj[i]['name'];
        else if(key === 'photo')
          nobj['photo'] = obj[i]['photo'];
        else
          nobj['more'].push(obj[i][key]);
      }
      mobj.push(nobj);
    }
    console.log(mobj);
    return mobj;
  }*/
}
