import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { GuestRoomComponent } from './components/facilities/guest-room/guest-room.component';
import { MessComponent } from './components/facilities/mess/mess.component';
import { ReadingRoomComponent } from './components/facilities/reading-room/reading-room.component';
import { TVRoomComponent } from './components/facilities/tvroom/tvroom.component';
import { ComputerRoomComponent } from './components/facilities/computer-room/computer-room.component';
import { SportsComponent } from './components/facilities/sports/sports.component';
import { MusicRoomComponent } from './components/facilities/music-room/music-room.component';
import { CanteenComponent } from './components/facilities/canteen/canteen.component';
import { WardensComponent } from './components/administration/wardens/wardens.component';
import { HecComponent } from './components/administration/hec/hec.component';
import { MessComponent as MessCommitteeComponent } from './components/administration/mess/mess.component';
import { MaintenanceComponent } from './components/administration/maintenance/maintenance.component';
import { EventsComponent } from './components/administration/events/events.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { CsCoreComponent } from './components/people/cs-core/cs-core.component';
import { SGComponent } from './components/people/sg/sg.component';
import { AMComponent } from './components/people/am/am.component';
import { ClubSecyComponent } from './components/people/club-secy/club-secy.component';
import { ClubCoordiComponent } from './components/people/club-coordi/club-coordi.component';
import { ResponseComponent } from './components/feedback/response/response.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'facility', component: InfoComponent , data: { infoId: 'facilities' },
    children: [
      { path: '', redirectTo: 'guest', pathMatch: 'full'},
      { path: 'guest', component: GuestRoomComponent },
      { path: 'mess', component: MessComponent },
      { path: 'reading', component: ReadingRoomComponent },
      { path: 'tv', component: TVRoomComponent },
      { path: 'computer', component: ComputerRoomComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'music', component: MusicRoomComponent },
      { path: 'canteen', component: CanteenComponent }
    ]
  },
  { path: 'administration', component: InfoComponent , data: { infoId: 'administration' },
    children: [
      { path: '', redirectTo: 'wardens', pathMatch: 'full'},
      { path: 'wardens', component: WardensComponent },
      { path: 'hec', component: HecComponent },
      { path: 'mess', component: MessCommitteeComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'activity', component: EventsComponent }
    ]
  },
  { path: 'people', component: InfoComponent , data: { infoId: 'people' },
    children: [
      { path: '', redirectTo: 'cscoreteam', pathMatch: 'full'},
      { path: 'cscoreteam', component: CsCoreComponent },
      { path: 'studentguides', component: SGComponent },
      { path: 'academicmentors', component: AMComponent },
      { path: 'clubsecretaries', component: ClubSecyComponent },
      { path: 'clubcoordinators', component: ClubCoordiComponent }
    ]
  },
  { path: 'feedback', component: FeedbackComponent  },
  { path: 'response/:id', component: ResponseComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
