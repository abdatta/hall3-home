import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-computer-room',
  templateUrl: './computer-room.component.html',
  styleUrls: ['./computer-room.component.css']
})
export class ComputerRoomComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('comp');
  }

}
