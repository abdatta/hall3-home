import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../../services/main/main.service';
import { InfoService } from '../../services/info/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title: string;
  tab: string;
  list: Object[];

  constructor(private route: ActivatedRoute,
              private mainService: MainService,
              private infoService: InfoService) {
    infoService.tabSet$.subscribe(
      tab => {
        this.tab = tab;
      });
  }

  ngOnInit() {
    this.title = this.route.snapshot.data['infoId'];
    this.list = this.mainService.getInfoList(this.title);
  }

  link(id: string) {
    return this.mainService.getLink(id);
  }

  toTitleCase(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

}
