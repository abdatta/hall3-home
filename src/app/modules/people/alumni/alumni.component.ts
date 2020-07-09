import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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
  maxchars = 300;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.maxchars = (window.innerWidth < 768) ? 300 : (window.innerWidth < 1200)? 500 : (window.innerWidth < 1464) ? 700 : 1000 ;
    this.infoService.getPeopleInfo('alumni')
      .subscribe((d: object[]) => {
        if ( d.hasOwnProperty('err')) {
          console.log(d['err']);
        }
        this.alumni = d['info'];
        this.editors = d['editors'];
        this.loaded = true;
      });
    
    this.infoService.getBatchWise('batch').subscribe((d: object) => {
      if (d.hasOwnProperty('err')) {
          console.log(d['err']);
      } else {
        this.alumni = d['info'];
        this.editors = d['editors'];
        this.loaded = true;
      }
    });
  }

  @HostListener('window:resize', ['$event']) makeResponsive(event) {
    this.maxchars = (event.srcElement.innerWidth < 768) ? 300 : (event.srcElement.innerWidth < 1200)? 500 : (event.srcElement.innerWidth < 1464) ? 700: 1000;
  }

  save(diff: object[]) {
    this.infoService.updatePeopleInfo('alumni', diff)
      .subscribe((s: number) => {
        this.head.saved(s === 200);
        this.tiles.saved(s === 200);
    });
  }

}


