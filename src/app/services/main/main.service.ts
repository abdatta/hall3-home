import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  private links: Object = {
    'home' : '',
    'about' : '/about',
    'facilities' : '/facilities',
      'guest' : '/facility/guest',
      'mess' : '/facility/mess',
      'rr' : '/facility/reading',
      'tv' : '/facility/tv',
      'comp' : '/facility/computer',
      'sports' : '/facility/sports',
      'music' : '/facility/music',
      'canteen' : '/facility/canteen',
    'adminis' : '/administration',
      'wardens' : '/administration/wardens',
      'hec' : '/administration/hec',
      'messc' : '/administration/mess',
      'maintc' : '/administration/maintenance',
      'eventsc' : '/administration/activity',
      'advisoryc' : '/administration/advisory',
      'constitution': '/server/files/hall_3_constitution.pdf',
    'people' : '/people',
      'cs-core': '/people/cscoreteam',
      'sg' : '/people/studentguides',
      'am' : '/people/academicmentors',
      'clubsecy' : '/people/clubsecretaries',
      'clubcoordi' : '/people/clubcoordinators',
    'feedback': '/feedback'
  };
  private mainmenu: Object[] = [
    {
      'title' : 'Home',
      'class' : '',
      'linkId' : 'home'
    },
    {
      'title' : 'About',
      'class' : '',
      'linkId' : 'about'
    },
    {
      'title' : 'Facilities',
      'class' : 'dropdown',
      'linkId' : 'facilities',
      'dropdown' :
        [

          {
            'title' : 'Guest Room',
            'linkId' : 'guest'
          },
          {
            'title' : 'Mess',
            'linkId' : 'mess'
          },
          {
            'title' : 'Reading Room',
            'linkId' : 'rr'
          },
          {
            'title' : 'TV Room',
            'linkId' : 'tv'
          },
          {
            'title' : 'Computer Room',
            'linkId' : 'comp'
          },
          {
            'title' : 'Sports Facilities',
            'linkId' : 'sports'
          },
          {
            'title' : 'Music Room',
            'linkId' : 'music'
          },
          {
            'title' : 'Canteen',
            'linkId' : 'canteen'
          }
        ]
    },
    {
      'title' : 'Administration',
      'class' : 'dropdown',
      'linkId' : 'adminis',
      'dropdown' :
        [
          {
            'title' : 'Wardens',
            'linkId' : 'wardens'
          },
          {
            'title' : 'Hall Executive Committee',
            'linkId' : 'hec'
          },
          {
            'title' : 'Mess Committee',
            'linkId' : 'messc'
          },
          {
            'title' : 'Maintenance Committee',
            'linkId' : 'maintc'
          },
          {
            'title' : 'Students’ Activity Committee',
            'linkId' : 'eventsc'
          },
          {
              'title' : 'Advisory Committee',
              'linkId' : 'advisoryc'
          },
          {
              'title' : 'Our Constitution',
              'linkId' : 'constitution'
          }
        ]
    },
    {
      'title' : 'People',
      'class' : 'dropdown',
      'linkId' : 'people',
      'dropdown' :
        [
          {
            'title' : 'Counselling Service Core Team',
            'linkId' : 'cs-core'
          },
          {
            'title' : 'Student Guides',
            'linkId' : 'sg'
          },
          {
            'title' : 'Academic Mentors',
            'linkId' : 'am'
          }/*,
          {
            'title' : 'Club Secretaries',
            'linkId' : 'clubsecy'
          },
          {
            'title' : 'Club Coordinators',
            'linkId' : 'clubcoordi'
          }*/
        ]
    },
    {
      'title' : 'Feedback',
      'class' : '',
      'linkId' : 'feedback'
    }
  ];
  private info = {
    'facilities' : {
      'tabs' :
        [
          {
            'name' : 'Guest Room',
            'id' : 'guest',
            'linkId' : 'guest'
          },
          {
            'name' : 'Mess',
            'id' : 'mess',
            'linkId' : 'mess'
          },
          {
            'name' : 'Reading Room',
            'id' : 'rr',
            'linkId' : 'rr'
          },
          {
            'name' : 'TV Room',
            'id' : 'tv',
            'linkId' : 'tv'
          },
          {
            'name' : 'Computer Room',
            'id' : 'comp',
            'linkId' : 'comp'
          },
          {
            'name' : 'Sports Facilities',
            'id' : 'sports',
            'linkId' : 'sports'
          },
          {
            'name' : 'Music Room',
            'id' : 'music',
            'linkId' : 'music'
          },
          {
            'name' : 'Canteen',
            'id' : 'canteen',
            'linkId' : 'canteen'
          }
        ],
      'bodies' :
        [
          {
            'id' : 'guest',
            'heading' : 'Guest Room',
            'body' : 'mess'
          },
          {
            'id' : 'mess',
            'heading' : 'Mess',
            'body' : 'mess'
          },
          {
            'id' : 'rr',
            'heading' : 'Reading Room',
            'body' : 'mess'
          },
          {
            'id' : 'tv',
            'heading' : 'TV Room',
            'body' : 'mess'
          },
          {
            'id' : 'cc',
            'heading' : 'Computer Room',
            'body' : 'mess'
          },
          {
            'id' : 'sports',
            'heading' : 'Sports Facilities',
            'body' : 'mess'
          },
          {
            'id' : 'music',
            'heading' : 'Music Room',
            'body' : 'mess'
          },
          {
            'id' : 'canteen',
            'heading' : 'Canteen',
            'body' : 'mess'
          }
        ]
    },
    'administration': {
      'tabs' :
        [
          {
            'name' : 'Wardens',
            'id' : 'wardens',
            'linkId' : 'wardens'
          },
          {
            'name' : 'Hall Executive Committee',
            'id' : 'hec',
            'linkId' : 'hec'
          },
          {
            'name' : 'Mess Committee',
            'id' : 'mess',
            'linkId' : 'messc'
          },
          {
            'name' : 'Maintenance Committee',
            'id' : 'maint',
            'linkId' : 'maintc'
          },
          {
            'name' : 'Students’ Activity Committee',
            'id' : 'events',
            'linkId' : 'eventsc'
          },
          {
              'name' : 'Advisory Committee',
              'id' : 'advisory',
              'linkId' : 'advisoryc'
          }
        ],
      'bodies' :
        [
          {
            'id' : 'wardens',
            'heading' : 'Wardens',
            'body' : 'wardens'
          },
          {
            'id' : 'hec',
            'heading' : 'Hall Executive Committee',
            'body' : 'wardens'
          },
          {
            'id' : 'mess',
            'heading' : 'Mess Committee',
            'body' : 'wardens'
          },
          {
            'id' : 'maint',
            'heading' : 'Maintenace Committee',
            'body' : 'wardens'
          },
          {
            'id' : 'events',
            'heading' : 'Students’ Activity Committee',
            'body' : 'wardens'
          }
        ]
    },
    'people': {
      'tabs' :
        [
          {
            'name' : 'Counselling Service Core Team',
            'id' : 'cs-core',
            'linkId' : 'cs-core'
          },
          {
            'name' : 'Student Guides',
            'id' : 'sg',
            'linkId' : 'sg'
          },
          {
            'name' : 'Academic Mentors',
            'id' : 'am',
            'linkId' : 'am'
          }/*,
          {
            'name' : 'Club Secretaries',
            'id' : 'secy',
            'linkId' : 'clubsecy'
          },
          {
            'name' : 'Club Coordinators',
            'id' : 'coordi',
            'linkId' : 'clubcoordi'
          }*/
        ],
      'bodies' :
        [
          {
            'id' : 'sg',
            'heading' : 'Students Guides',
            'body' : 'sg'
          },
          {
            'id' : 'am',
            'heading' : 'Academic Mentors',
            'body' : 'sg'
          },
          {
            'id' : 'secy',
            'heading' : 'Club Secretaries',
            'body' : 'sg'
          },
          {
            'id' : 'coordi',
            'heading' : 'Club Coordinators',
            'body' : 'sg'
          }
        ]
    }
  };

  constructor() { }

  getLink(id: string): string {
    return this.links[id];
  }
  getMainmenu(): Object[] {
    return this.mainmenu;
  }
  getInfoList(id: string): Object[] {
    return this.info[id].tabs;
  }
}
