import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-music-room',
  templateUrl: './music-room.component.html',
  styleUrls: ['./music-room.component.css']
})
export class MusicRoomComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('music');
  }

}
