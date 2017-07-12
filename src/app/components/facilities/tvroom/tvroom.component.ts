import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-tvroom',
  templateUrl: './tvroom.component.html',
  styleUrls: ['./tvroom.component.css']
})
export class TVRoomComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('tv');
  }

}
