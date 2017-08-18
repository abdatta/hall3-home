import { Component, OnInit } from '@angular/core';

import { MainService }  from '../../services/main/main.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  links: object[] = [{}];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.links = this.mainService.getMainmenu().slice(-1)[0]['dropdown'];
    console.log(this.links);
  }

  getlink(id: string): string {
    return this.mainService.getLink(id);
  }

}
