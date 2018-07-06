import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';
import { TilesComponent } from '../../tiles/tiles.component'
import { InfoheadComponent } from '../../infohead/infohead.component';

@Component({
  selector: 'app-cs-core',
  templateUrl: './cs-core.component.html',
  styleUrls: ['./cs-core.component.css']
})
export class CsCoreComponent implements OnInit {

  @ViewChildren(InfoheadComponent) heads: QueryList<InfoheadComponent>;
  @ViewChildren(TilesComponent) posts: QueryList<TilesComponent>;
  loaded = false;
  editors: string[] = [];
  info: object[];
  backup: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getPeopleInfo('cs-core')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.info = [{
            'members': d['info']
          }];
          console.log(d['err']);
        } else {
          this.info = d['info'];
          this.editors = d['editors'];
          this.backup = JSON.parse(JSON.stringify(this.info));
        }
        this.loaded = true;
      });
  }

  edit(i: number) {
    this.posts.toArray()[i].edit();
  }

  saver(i: number) {
    this.posts.toArray()[i].save();
  }

  save(history: object[], i: number) {
    this.infoService.updatePeopleInfo('cs-core', [
      {
        'type': 'N',
        'index': i,
        'key': 'members',
        'diff': history
      }
    ]).subscribe((s: number) => {
      this.heads.toArray()[i].saved(s === 200);
      this.posts.toArray()[i].saved(s === 200);
    });
  }

  discard(i: number) {
    this.info[i]['members'] = this.posts.toArray()[i].discard();
  }
}
