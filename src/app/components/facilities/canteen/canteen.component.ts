import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css']
})
export class CanteenComponent implements OnInit {

  images: string[] = ['', '2'].map(c => `images/facilities/canteen${c}.jpg`);

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('canteen');
  }

}
