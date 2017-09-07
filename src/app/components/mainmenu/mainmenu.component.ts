import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main/main.service';
import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  menu: Object[];
  dropped: boolean;
  initialised = false;
  logstat: boolean;

  constructor(private mainService: MainService,
              private usersService: UsersService) {
    usersService.logStat$.subscribe(
        stat => {
          this.logstat = stat;
        });
  }

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
    if(!this.initialised)
      this.initialised = true;
  }

  show(title: string) {
    if(title === 'Profile') {
      this.usersService.check()
          .then((result: boolean) => {
             return result;
          });
    } else {
      return true;
    }
  }

}
