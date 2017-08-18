import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {

  images: string[] = [
    'mess.jpg',
    'mess2.jpg',
    'mess3.jpg'
  ];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('mess');
  }

}
