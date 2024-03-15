import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  private links: Object = {
    'home' : '',
    'about' : '/about',
    // 'gallery' : '/gallery',
    'facilities' : null,
      'guest' : '/facility/guest',
      'mess' : '/facility/mess',
      'rr' : '/facility/reading',
      'tv' : '/facility/tv',
      'comp' : '/facility/computer',
      'sports' : '/facility/sports',
      'music' : '/facility/music',
      'canteen' : '/facility/canteen',
    'adminis' : null,
      'hec' : '/administration/hec',
      'ex_hec' : '/administration/ex_hec',
      'hall_office' : '/administration/hall_office',
      'messc' : '/administration/mess',
      'maintc' : '/administration/maintenance',
      'eventsc' : '/administration/activity',
      'advisoryc' : '/administration/advisory',
      'constitution': 'https://drive.google.com/file/d/0B0R9GQGvvy84ZnNDWnB4QWZhNUU/view',
    'people' : null,
      'cs-core': '/people/cscoreteam',
      'sg' : '/people/studentguides',
      'am' : '/people/academicmentors',
      'alumni': '/people/alumni-memoirs',
      'clubsecy' : '/people/clubsecretaries',
      'clubcoordi' : '/people/clubcoordinators',
    'notices' : null,
      'allnotices': '/notices/category/all',
      'announcements': '/notices/category/announcements',
      'lnf': '/notices/category/lnf',
      'minutes': 'notices/category/minutes',
      'otherdocuments': '/notices/category/other_documents',
    'quicks': null,
      'faqs': '/server/files/faqs.pdf',
      'athform': '/feedback/ath',
      'lnfform': '/feedback/lnf',
      'messportal': 'http://mess.hall3iitk.com',
      'login': '/login',
      'dash': '/user/dashboard',
      'map': '/map',
      'rules': '/server/files/rules.pdf',
      // 'messfeedback': 'https://goo.gl/CAu4xv'
  };
  private mainmenu: Object[] = [
    {
      'title' : 'Home',
      'class' : '',
      'link' : this.getLink('home')
    },
    {
      'title' : 'About',
      'class' : '',
      'link' : this.getLink('about')
    },
    // {
    //   'title' : 'Gallery',
    //   'class' : '',
    //   'link' : this.getLink('gallery')
    // },
    {
      'title' : 'Facilities',
      'class' : 'dropdown',
      'link' : this.getLink('facilities'),
      'dropdown' :
        [

          {
            'title' : 'Guest Room',
            'link' : this.getLink('guest')
          },
          {
            'title' : 'Mess',
            'link' : this.getLink('mess')
          },
          {
            'title' : 'Reading Room',
            'link' : this.getLink('rr')
          },
          {
            'title' : 'TV Room',
            'link' : this.getLink('tv')
          },
          {
            'title' : 'Computer Room',
            'link' : this.getLink('comp')
          },
          {
            'title' : 'Sports Facilities',
            'link' : this.getLink('sports')
          },
          {
            'title' : 'Music Room',
            'link' : this.getLink('music')
          },
          {
            'title' : 'Canteen',
            'link' : this.getLink('canteen')
          }
        ]
    },
    {
      'title' : 'Administration',
      'class' : 'dropdown',
      'link' : this.getLink('adminis'),
      'dropdown' :
        [
          {
            'title' : 'Hall Executive Committee',
            'link' : this.getLink('hec')
          },
          // {
          //   'title' : 'Ex Hall Executive Committee',
          //   'link' : this.getLink('ex_hec')
          // },
          
          {
            'title' : 'Mess Committee',
            'link' : this.getLink('messc')
          },
          {
            'title' : 'Maintenance Committee',
            'link' : this.getLink('maintc')
          },
          {
            'title' : 'Students’ Activity Committee',
            'link' : this.getLink('eventsc')
          },
          {
              'title' : 'Advisory Committee',
              'link' : this.getLink('advisoryc')
          },
          {
            'title' : 'Hall Office',
            'link' : this.getLink('hall_office')
          }
        ]
    },
    {
      'title' : 'People',
      'class' : 'dropdown',
      'link' : this.getLink('people'),
      'dropdown' :
        [
          {
            'title' : 'Alumni Memoirs',
            'link' : this.getLink('alumni')
          },
          {
            'title' : 'Counselling Service Core Team',
            'link' : this.getLink('cs-core')
          },
          {
            'title' : 'Student Guides',
            'link' : this.getLink('sg')
          },
          {
            'title' : 'Academic Mentors',
            'link' : this.getLink('am')
          },
          /*,
          {
            'title' : 'Club Secretaries',
            'link' : this.getLink('clubsecy')
          },
          {
            'title' : 'Club Coordinators',
            'link' : this.getLink('clubcoordi')
          }*/
        ]
    },
      {
          'title' : 'Notices',
          'class' : 'dropdown',
          'link' : this.getLink('notices'),
          'dropdown' :
              [
                  {
                      'title' : 'All',
                      'link' : this.getLink('allnotices')
                  },
                  {
                      'title' : 'Announcements',
                      'link' : this.getLink('announcements')
                  },
                  {
                      'title' : 'Lost & Found',
                      'link' : this.getLink('lnf')
                  },
                  {
                      'title' : 'Minutes',
                      'link' : this.getLink('minutes')
                  },
                  {
                      'title' : 'Other Documents',
                      'link' : this.getLink('otherdocuments')
                  }
              ]
      },
      {
          'title' : 'Quick Links',
          'class' : 'dropdown',
          'link' : this.getLink('quicks'),
          'dropdown' :
              [
                  {
                      'title' : 'FAQs',
                      'link' : this.getLink('faqs'),
                      'newtab': true
                  },
                  {
                      'title' : 'Hall Rules',
                      'link' : this.getLink('rules'),
                      'newtab': true
                  },
                  {
                      'title' : 'Our Constitution',
                      'link' : this.getLink('constitution'),
                      'newtab': true
                  },
                  {
                      'title' : 'Ask The HEC',
                      'link' : this.getLink('athform')
                  },
                  {
                      'title' : 'Lost & Found',
                      'link' : this.getLink('lnfform')
                  },
                  {
                      'title' : 'Mess Automation Portal',
                      'link' : this.getLink('messportal'),
                      'newtab': true
                  },
                  {
                      'title' : 'Hall Map',
                      'link' : this.getLink('map')
                  },
                  {
                      'title1' : 'Login',
                      'link1' : this.getLink('login'),
                      'title2' : 'Dashboard',
                      'link2' : this.getLink('dash'),
                      'guard': true
                  }
              ]
      }
  ];
  private info = {
    'facilities' :
        [
          {
            'name' : 'Guest Room',
            'id' : 'guest',
            'link' : this.getLink('guest')
          },
          {
            'name' : 'Mess',
            'id' : 'mess',
            'link' : this.getLink('mess')
          },
          {
            'name' : 'Reading Room',
            'id' : 'rr',
            'link' : this.getLink('rr')
          },
          {
            'name' : 'TV Room',
            'id' : 'tv',
            'link' : this.getLink('tv')
          },
          {
            'name' : 'Computer Room',
            'id' : 'comp',
            'link' : this.getLink('comp')
          },
          {
            'name' : 'Sports Facilities',
            'id' : 'sports',
            'link' : this.getLink('sports')
          },
          {
            'name' : 'Music Room',
            'id' : 'music',
            'link' : this.getLink('music')
          },
          {
            'name' : 'Canteen',
            'id' : 'canteen',
            'link' : this.getLink('canteen')
          }
        ],
    'administration':
        [
          {
            'name' : 'Hall Executive Committee',
            'id' : 'hec',
            'link' : this.getLink('hec')
          },
          // {
          //   'name' : 'Ex Hall Executive Committee',
          //   'id' : 'ex_hec',
          //   'link' : this.getLink('ex_hec')
          // },
          
          {
            'name' : 'Mess Committee',
            'id' : 'mess',
            'link' : this.getLink('messc')
          },
          {
            'name' : 'Maintenance Committee',
            'id' : 'maint',
            'link' : this.getLink('maintc')
          },
          {
            'name' : 'Students’ Activity Committee',
            'id' : 'events',
            'link' : this.getLink('eventsc')
          },
          {
              'name' : 'Advisory Committee',
              'id' : 'advisory',
              'link' : this.getLink('advisoryc')
          },
          {
            'name' : 'Hall Office',
            'id' : 'hall_office',
            'link' : this.getLink('hall_office')
          }
        ],
    'people':
        [
          {
            'name' : 'Alumni Memoirs',
            'id' : 'alumni',
            'link' : this.getLink('alumni')
          },
          {
            'name' : 'Counselling Service Core Team',
            'id' : 'cs-core',
            'link' : this.getLink('cs-core')
          },
          {
            'name' : 'Student Guides',
            'id' : 'sg',
            'link' : this.getLink('sg')
          },
          {
            'name' : 'Academic Mentors',
            'id' : 'am',
            'link' : this.getLink('am')
          }/*,
          {
            'name' : 'Club Secretaries',
            'id' : 'secy',
            'link' : this.getLink('clubsecy')
          },
          {
            'name' : 'Club Coordinators',
            'id' : 'coordi',
            'link' : this.getLink('clubcoordi')
          }*/
        ]
  };

  constructor() { }

  private getLink(id: string): () => string {
    return () => this.links[id];
  }

  getMainmenu(): Object[] {
    return this.mainmenu;
  }
  getInfoList(id: string): Object[] {
    return this.info[id];
  }
}
