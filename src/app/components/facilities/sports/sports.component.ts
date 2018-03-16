import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  images: string[] = ['', '2', '3', '4', '5'].map(s => `images/facilities/sports${s}.jpg`);

  loaded = false;

  inventory: object[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('sports');
    this.infoService.getFacilityData('sports_inventory')
        .subscribe((d: any) => {
          if (d.hasOwnProperty('err')) {
            this.inventory = [{}];
          } else {
            this.inventory = d;
          }
          this.loaded = true;
        });
  }
}
