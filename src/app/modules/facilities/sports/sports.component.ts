import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoheadComponent } from '../../infohead/infohead.component';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  @ViewChild(InfoheadComponent) head: InfoheadComponent;
  images: string[] = ['', '2', '3', '4', '5'].map(s => `images/facilities/sports${s}.jpg`);

  loaded = false;
  editable = false;
  saving = false;
  sureDel = -1;

  editors: string[] = [];
  inventory: object[] = [];
  backup: object[];
  history: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getFacilityInfo('sports_inventory')
        .subscribe((d: any) => {
          if (d.hasOwnProperty('err')) {
            this.inventory = [{}];
          } else {
            this.inventory = d['info'];
            this.editors = d['editors'];
          }
          this.loaded = true;
        });
  }

  prev(i: number) {
    this.inventory.splice(i - 1, 2, this.inventory[i], this.inventory[i - 1]);
    this.sureDel = -1;
    this.updateHistory({
      'type': 'M',
      'from': i,
      'to': i - 1
    });
  }

  next(i: number) {
    this.inventory.splice(i, 2, this.inventory[i + 1], this.inventory[i]);
    this.sureDel = -1;
    this.updateHistory({
      'type': 'M',
      'from': i,
      'to': i + 1
    });
  }

  change(val: any, i: number, source: string) {
    let from: object;
    if (!this.inventory[i]['edited']) {
      from = JSON.parse(JSON.stringify(this.inventory[i]));
      delete from['edited'];
    }

    this.inventory[i][source] = val;

    if (!this.inventory[i]['edited']) {
      this.inventory[i]['edited'] = true;
      this.updateHistory({
        'type': 'E',
        'index': i,
        'from': from,
        'to': this.inventory[i]
      });
    }
  }

  add() {
    const newitem = {
      name: '',
      available: 1,
      total: 1
    };
    this.inventory.push(newitem);

    newitem['edited'] = true;
    this.updateHistory({
      'type': 'A',
      'item': newitem
    });
  }

  del(i: number) {
    if (this.sureDel === i) {
      this.inventory.splice(i, 1);
      this.sureDel = -1;
      this.updateHistory({
        'type': 'D',
        'index': i
      });
    } else {
      this.sureDel = i;
      setTimeout(() => {
        if (this.sureDel === i) {
          this.sureDel = -1;
        }
      }, 3000);
    }
  }

  edit() {
    this.editable = true;
    this.backup = JSON.parse(JSON.stringify(this.inventory));
    this.inventory.map(item => item['edited'] = false);
    this.history = [];
  }

  save() {
    this.saving = true;
    this.inventory.map(tile => delete tile['edited']);
    this.infoService.updateFacilityInfo('sports_inventory', this.history)
      .subscribe((s: number) => {
        this.saving = false;
        this.head.saved(s === 200);
        if (s === 200) { this.editable = false; }
    });
  }

  discard() {
    this.editable = false;
    this.inventory = this.backup;
  }

  updateHistory(change: object) {
    if (this.history.length === 0) {
      this.history.push(change);
    } else {
      const last = this.history[this.history.length - 1];
      switch (change['type']) {
        case 'M':
          if (last['type'] === 'M' && last['to'] === change['from']) {
            last['to'] = change['to'];
          } else if (last['type'] === 'M' && last['to'] === change['to']) {
            last['to'] = change['from'];
               } else {
            this.history.push(change);
               }
          if (last['type'] === 'M' && last['from'] === last['to']) {
            this.history.pop();
          }
          break;

        case 'E':
          this.history.push(change);
          break;

        case 'A':
          this.history.push(change);
          break;

        case 'D':
          if (change['index'] === this.inventory.length && last['type'] === 'A') {
            this.history.pop();
          } else {
            this.history.push(change);
          }
          break;
        default:
          // code...
          break;
      }
    }
    // console.log(JSON.stringify(this.history, null,2));
  }
}
