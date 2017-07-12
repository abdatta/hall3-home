import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-reading-room',
  templateUrl: './reading-room.component.html',
  styleUrls: ['./reading-room.component.css']
})
export class ReadingRoomComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('rr');
  }

}
