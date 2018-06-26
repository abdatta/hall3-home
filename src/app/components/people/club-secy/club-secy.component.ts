import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-club-secy',
  templateUrl: './club-secy.component.html',
  styleUrls: ['./club-secy.component.css']
})
export class ClubSecyComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

}
