import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { AboutComponent } from './components/about/about.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { GuestRoomComponent } from './components/facilities/guest-room/guest-room.component';
import { MessComponent } from './components/facilities/mess/mess.component';
import { ReadingRoomComponent } from './components/facilities/reading-room/reading-room.component';
import { TVRoomComponent } from './components/facilities/tvroom/tvroom.component';
import { ComputerRoomComponent } from './components/facilities/computer-room/computer-room.component';
import { SportsComponent } from './components/facilities/sports/sports.component';
import { InventoryComponent } from './components/facilities/sports/inventory/inventory.component';
import { MusicRoomComponent } from './components/facilities/music-room/music-room.component';
import { CanteenComponent } from './components/facilities/canteen/canteen.component';
import { HecComponent } from './components/administration/hec/hec.component';
import { MessComponent as MessCommitteeComponent } from './components/administration/mess/mess.component';
import { MaintenanceComponent } from './components/administration/maintenance/maintenance.component';
import { EventsComponent } from './components/administration/events/events.component';
import { AdvisoryComponent } from './components/administration/advisory/advisory.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { CsCoreComponent } from './components/people/cs-core/cs-core.component';
import { SGComponent } from './components/people/sg/sg.component';
import { AMComponent } from './components/people/am/am.component';
import { ClubSecyComponent } from './components/people/club-secy/club-secy.component';
import { ClubCoordiComponent } from './components/people/club-coordi/club-coordi.component';
import { ResponseComponent } from './components/feedback/response/response.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { EditNewsComponent } from './components/news/edit-news/edit-news.component';
import { SingleNewsComponent } from './components/news/single-news/single-news.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { MapComponent } from './components/map/map.component';
import { UnsubscribeComponent } from './components/news/unsubscribe/unsubscribe.component';
import { ReportComponent } from './components/feedback/report/report.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/* importing guards here */
import {UsersGuard, LogInGuard, AdminGuard, LevelGuard} from './auth.guard';

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
      { path: 'sports/inventory', component: InventoryComponent, canActivate: [ LevelGuard ], data: { level: 'sports' } },
      { path: 'music', component: MusicRoomComponent },
      { path: 'canteen', component: CanteenComponent }
    ]
  },
  { path: 'administration', component: InfoComponent , data: { infoId: 'administration' },
    children: [
      { path: '', redirectTo: 'hec', pathMatch: 'full'},
      { path: 'hec', component: HecComponent },
      { path: 'mess', component: MessCommitteeComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'activity', component: EventsComponent },
      { path: 'advisory', component: AdvisoryComponent }
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
  { path: 'notices',
    children: [
      { path: '', redirectTo: 'category/all', pathMatch: 'full' },
      { path: 'add', component: AddNewsComponent, canActivate: [ UsersGuard ] },
      { path: 'edit/:id', component: EditNewsComponent, canActivate: [ UsersGuard ] },
      { path: 'category/:cat', component: NewsComponent },
      { path: 'single/:id', component: SingleNewsComponent },
      { path: 'unsubscribe', component: UnsubscribeComponent }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [ LogInGuard ] },
  { path: 'signup', component: SignupComponent, canActivate: [ AdminGuard ] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ UsersGuard ] },
  { path: 'feedback', component: FeedbackComponent  },
  { path: 'response/:id', component: ResponseComponent  },
  { path: 'report/:id', component: ReportComponent  },
  { path: 'quicklinks', component: QuickLinksComponent  },
  { path: 'map', component: MapComponent  },
  { path: '**' , component: NotFoundComponent }
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
