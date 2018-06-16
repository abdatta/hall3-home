import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-reading-room',
  templateUrl: './reading-room.component.html',
  styleUrls: ['./reading-room.component.css']
})
export class ReadingRoomComponent implements OnInit {

  images: string[] = [''].map(r => `images/facilities/rr${r}.jpg`);

  books: object[];
  loaded = false;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('rr');
    this.infoService.getFacilityData('books')
        .subscribe((d: any) => {
          if (d.hasOwnProperty('err')) {
            this.books = [{}];
          } else {
            this.books = d;
          }
          this.loaded = true;
        });
  }

}
