import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css']
})
export class CanteenComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('canteen');
  }

}
