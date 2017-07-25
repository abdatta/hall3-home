import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  images: string[] = [
    'sports.jpg',
    'sports2.jpg',
    'sports3.jpg',
    'sports4.jpg'
  ];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('sports');
  }

}
