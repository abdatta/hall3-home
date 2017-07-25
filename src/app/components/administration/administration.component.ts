import { Component, OnInit } from '@angular/core';
import  { InfoService } from '../../services/info/info.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

    wardens: object[];
    hec: object[];

    constructor(private infoService: InfoService) { }

    ngOnInit() {
        this.infoService.getAdministration('wardens')
            .subscribe((d: object) => {
                if (d.hasOwnProperty('err')) {
                    this.wardens = [{}];
                } else {
                    this.wardens = d['members'];
                }
            });
        this.infoService.getAdministration('hec')
            .subscribe((d: object) => {
                if (d.hasOwnProperty('err')) {
                    this.hec = [{}];
                } else {
                    this.hec = d['members'];
                }
            });
    }

}
