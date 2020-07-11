import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { AlumniTilesComponent } from "./alumni-tiles/alumni-tiles.component";
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  @ViewChild(AlumniTilesComponent) tiles: AlumniTilesComponent;
  loaded = false;
  batches: string[] = [];
  bat="all";
  editors: string[] = [];
  fetchedData: object[];
  alumni: object[];
  maxchars = 300;

  constructor(private infoService: InfoService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.infoService.getPeopleInfo('alumni')
        .subscribe((d: object[]) => {
          if ( d.hasOwnProperty('err')) {
            console.log(d['err']);
          }
          this.fetchedData = d['info'];

          this.batches = Array.from(new Set(this.fetchedData.map(data=>data['batch']))).sort();
          this.batches.unshift('all');
          
          this.bat=params['id'];
          
          if(this.batches.indexOf(this.bat) === -1) this.router.navigate(['people/alumni-memoirs/all']);
          else this.loaded=true;

          this.alumni = this.bat == 'all' ? this.fetchedData : this.fetchedData.filter((data) => data['batch'] == this.bat);
          
          this.editors = d['editors'];
          // this.loaded = true;
        });
     
     
    });
    this.maxchars = (window.innerWidth < 768) ? 300 : (window.innerWidth < 1200)? 500 : (window.innerWidth < 1464) ? 700 : 1000 ;
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


