import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-music-room',
  templateUrl: './music-room.component.html',
  styleUrls: ['./music-room.component.css']
})
export class MusicRoomComponent implements OnInit {

  loaded = false;
  instruments: object[] = [];

  images: string[] = [''].map(m => `images/facilities/music${m}.jpg`);

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('music');
    this.infoService.getFacilityInfo('music_instruments')
        .subscribe((d: any) => {
          if (d.hasOwnProperty('err')) {
            this.instruments = [{}];
          } else {
            this.instruments = d['info'];
          }
          this.loaded = true;
        });
  }

}
