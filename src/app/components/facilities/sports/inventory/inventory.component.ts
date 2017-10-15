import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoService } from '../../../../services/info/info.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  loaded = false;

  saving = false;
  adding = false;

  inventory: object[] = [];
  newitem = '';

  constructor(private infoService: InfoService,
              private router: Router) { }

  ngOnInit() {
    this.infoService.setTab('sports');
    this.infoService.getFacilityData('sports_inventory')
     .subscribe((d: any) => {
     if (d.hasOwnProperty('err')) {
     this.inventory = [{}];
     } else {
     this.inventory = d;
     }
     this.loaded = true;
     });
  }

  save() {
    this.saving = true;
    this.infoService.updateFacilityData('sports_inventory', this.inventory)
        .subscribe((s: number) => {
          if (s !== 200) {
          } else {
            this.router.navigateByUrl('/dashboard');
          }
          this.saving = false;
        });
  }

    add() {
        this.inventory.push({
            'name': this.newitem,
            'available': 1,
            'total': 1
        });
        this.newitem = '';
    }

    change($event, i: number) {
      let s = $event.target.value;
      $event.target.value = "";
      if(s === '+available')
          this.inventory[i]['available']++;
      else if(s === '-available')
          this.inventory[i]['available']--;
      else if(s === '+total')
          this.inventory[i]['total']++;
      else if(s === '-total')
          this.inventory[i]['total']--;
      else if(s === 'up')
          this.inventory.splice(i-1, 2, this.inventory[i], this.inventory[i-1]);
      else if(s === 'down')
          this.inventory.splice(i, 2, this.inventory[i+1], this.inventory[i]);
      else if(s === 'delete')
          this.inventory.splice(i, 1);
    }

}
