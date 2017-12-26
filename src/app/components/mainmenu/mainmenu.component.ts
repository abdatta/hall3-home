import { Component, OnInit, HostListener } from '@angular/core';

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
  mobile = false;
  dropped2 = {
    index: 0,
    dropped: false
  }

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
    this.mobile = (window.innerWidth < 768);
  }

  @HostListener('window:resize', ['$event']) makeResponsive(event) {
    this.mobile = (event.srcElement.innerWidth < 768);
  }

  hasDropDown(i: number): boolean {
    return this.menu[i].hasOwnProperty('dropdown');
  }

  toggleDrop(i: number): void {
    if(this.mobile) {
      if(this.hasDropDown(i))
      {
        if(this.dropped2['index'] === i)
          this.dropped2['dropped'] = !this.dropped2['dropped'];
        else
          this.dropped2 = {
            index: i,
            dropped: true
          }
      } else {
        this.dropped2['dropped'] = false;
        this.dropped = !this.dropped;
      }

      if(!this.initialised)
        this.initialised = true;
    }
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
