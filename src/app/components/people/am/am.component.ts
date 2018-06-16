import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-am',
  templateUrl: './am.component.html',
  styleUrls: ['./am.component.css']
})
export class AMComponent implements OnInit {
  loaded = false;
  ams: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('am');
    this.infoService.getPeople('am')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err'))
          console.log(d['err']);
        this.ams = d['info'];
        this.loaded = true;
      });
  }
}
