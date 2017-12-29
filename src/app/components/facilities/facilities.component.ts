import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

    @ViewChild('carousel') carousel:any;
    slides : Array<Object> = [
        {
            src: 'images/facilities/mess.jpg',
            link: '/facility/mess',
            cap: 'Mess'
        },
        {
            src: 'images/facilities/tv.jpg',
            link: '/facility/tv',
            cap: 'TV Room'
        },
        {
            src: 'images/facilities/guest.jpg',
            link: '/facility/guest',
            cap: 'Guest Room'
        },
        {
            src: 'images/facilities/comp.jpg',
            link: '/facility/computer',
            cap: 'Computer Room'
        },
        {
            src: 'images/facilities/sports.jpg',
            link: '/facility/sports',
            cap: 'Sports Facilities'
        },
        {
            src: 'images/facilities/music.jpg',
            link: '/facility/music',
            cap: 'Music Room'
        },
        {
            src: 'images/facilities/canteen.jpg',
            link: '/facility/canteen',
            cap: 'Canteen'
        },
        {
            src: 'images/facilities/rr.jpg',
            link: '/facility/reading',
            cap: 'Reading Room'
        }
    ]
    options : Object = {
        clicking: true,
        sourceProp: 'src',
        visible: 5,
        perspective: 20,
        startSlide: 0,
        dir: 'ltr',
        width: 450,
        height: 350,
        space: 220,
        autoRotationSpeed: 5000,
        loop: true
    }

  constructor() { }

  ngOnInit() {
    this.updateOptions(window.innerWidth);
  }

  @HostListener('window:resize', ['$event']) makeResponsive(event) {
    if(this.updateOptions(event.srcElement.innerWidth))
        this.carousel.buildCarousel(this.slides, this.options);
  }

  updateOptions(width: number): boolean {
    let changed = false;

    let space: number;
    if(width < 520)
    {
        space = 110*width/360;
        this.options['visible'] = 3;
    }
    else if(width < 768)
    {
        space = 160;
        this.options['visible'] = 3;
    }
    else if(width < 992)
    {
        space = 250;
        this.options['visible'] = 3;
    }
    else if(width < 1200)
    {
        space = 220;
        this.options['visible'] = 5;
    }
    else if(width < 1464)
    {
        space = 290;
        this.options['visible'] = 5;
    }
    else
    {
        space = 280;
        this.options['visible'] = 7;
    }

    if(space !== this.options['space'])
    {
        this.options['space'] = space;
        changed = true;
    }

    if(width < 600)
    {
        this.options['perspective'] = 40;
        this.options['width'] = 3/4*width;
        this.options['height'] = 1/2*width + 50;
        changed = true;
    }
    else if(this.options['width'] !== 450)
    {
        this.options['perspective'] = 20;
        this.options['width'] = 450;
        this.options['height'] = 350;
        changed = true;
    }

    return changed;
  }

}
