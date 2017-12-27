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
    wardensloaded = false;
    hecloaded = false;
    wardensimages: string[] = [];
    fader = i => (2 + i)/10.0 ;

    constructor(private infoService: InfoService) { }

    ngOnInit() {
        this.infoService.getAdministration('wardens')
            .subscribe((d: object) => {
                if (d.hasOwnProperty('err')) {
                    this.wardens = [{}];
                } else {
                    this.wardens = d['members'];
                    this.wardensimages = this.wardens.map(warden => warden['photo']);
                }
            });
        this.infoService.getAdministration('hec')
            .subscribe((d: object) => {
                if (d.hasOwnProperty('err')) {
                    this.hec = [{}];
                } else {
                    this.hec = d['members'];
                }
                this.hecloaded  = true;
            });
    }

    load() {
        this.wardensimages.pop();
        if (this.wardensimages.length === 0) {
          this.wardensloaded = true;
        }
    }

}
