import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-music-room',
  templateUrl: './music-room.component.html',
  styleUrls: ['./music-room.component.css']
})
export class MusicRoomComponent implements OnInit {
  
  instruments: object[] = [
    {
      'name':'Drum set',
      'quantity':1
    },
    {
      'name':'Conga',
      'quantity':1
    },
    {
      'name':'Tabla',
      'quantity':1
    },
    {
      'name':'Amplifier',
      'quantity':3
    },
    {
      'name':'Flute',
      'quantity':1
    },
    {
      'name':'Synthesizer',
      'quantity':1
    },
    {
      'name':'Harmonium',
      'quantity':1
    },
    {
      'name':'Guitar processor',
      'quantity':1
    },
    {
      'name':'Dhol',
      'quantity':1
    },
    {
      'name':'Dholak',
      'quantity':1
    },
    {
      'name':'Microphone',
      'quantity':1
    }
  ];

  images: string[] = [''].map(m => `images/facilities/music${m}.jpg`);

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('music');
  }

}
