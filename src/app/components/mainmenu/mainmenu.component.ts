import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main/main.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  menu: Object[];
  dropped: boolean;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.menu = this.mainService.getMainmenu();
    this.dropped = false;
  }

  hasDropDown(i: number): boolean {
    return this.menu[i].hasOwnProperty('dropdown');
  }

  link(id: string): string {
    return this.mainService.getLink(id);
  }

  toggleDrop(): void {
    this.dropped = !this.dropped;
  }
}
