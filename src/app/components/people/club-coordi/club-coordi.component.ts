import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-club-coordi',
  templateUrl: './club-coordi.component.html',
  styleUrls: ['./club-coordi.component.css']
})
export class ClubCoordiComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

}
