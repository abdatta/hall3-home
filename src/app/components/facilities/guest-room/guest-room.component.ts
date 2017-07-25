import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-guest-room',
  templateUrl: './guest-room.component.html',
  styleUrls: ['./guest-room.component.css']
})
export class GuestRoomComponent implements OnInit {

  images: string[] = [
      'guest.jpg',
      'guest2.jpg',
      'guest3.jpg'
  ];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('guest');
  }

}
