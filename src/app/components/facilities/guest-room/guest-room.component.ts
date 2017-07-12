import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-guest-room',
  templateUrl: './guest-room.component.html',
  styleUrls: ['./guest-room.component.css']
})
export class GuestRoomComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('guest');
  }

}
