import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MainService } from '../../services/main/main.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title: string;
  tab: string;
  list: Object[];
  toggle: boolean;
  mobile: boolean;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private mainService: MainService) {}

  ngOnInit() {
    this.toggle = false;
    this.title = this.route.snapshot.data['infoId'];
    this.list = this.mainService.getInfoList(this.title);
    this.mobile = (window.innerWidth < 992);
  }

  @HostListener('window:resize', ['$event']) makeResponsive(event) {
    this.mobile = (event.srcElement.innerWidth < 992);
  }

  toTitleCase(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

}
