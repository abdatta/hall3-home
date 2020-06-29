import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';
import {NewsTileComponent} from '../../news-tile/news-tile.component';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  alumni: object;
  loaded = false;
  editors: string[] = [];
  ams: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getPeopleInfo('alumni')
      .subscribe((d: object[]) => {
        if ( d.hasOwnProperty('err')) {
          console.log(d['err']);
        }
        this.ams = d['info'];
        this.editors = d['editors'];
        this.loaded = true;
      });
  }
  }


