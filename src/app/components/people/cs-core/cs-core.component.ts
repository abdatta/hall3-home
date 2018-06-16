import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-cs-core',
  templateUrl: './cs-core.component.html',
  styleUrls: ['./cs-core.component.css']
})
export class CsCoreComponent implements OnInit {
  loaded = false;
  info: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getPeople('cs-core')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.info = [{
            'members': d['info']
          }];
          console.log(d['err']);
        } else {
          this.info = d['info'];
        }
        this.loaded = true;
      });
  }
}
