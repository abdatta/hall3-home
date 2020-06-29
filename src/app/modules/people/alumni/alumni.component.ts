import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';
import {NewsTileComponent} from '../../news-tile/news-tile.component';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  loaded = false;
  editors: string[] = [];
  alumni: object[];
  maxchars = 150;

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
  }


