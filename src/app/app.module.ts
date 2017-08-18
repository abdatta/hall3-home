/* importing modules here */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'angular-owl-carousel';

/* importing services here */
import { MainService } from './services/main/main.service';
import { InfoService } from './services/info/info.service';
import { FeedbackService } from './services/feedback/feedback.service';
import { NewsService } from './services/news/news.service';
import { UsersService } from './services/users/users.service';
import { LevelGuard, UsersGuard, LogInGuard, AdminGuard } from './auth.guard';

/* importing components here */
import { AppComponent } from './components/app/app.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { AboutComponent } from './components/about/about.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { WardensComponent } from './components/administration/wardens/wardens.component';
import { HecComponent } from './components/administration/hec/hec.component';
import { MessComponent as MessCommitteeComponent } from './components/administration/mess/mess.component';
import { MaintenanceComponent } from './components/administration/maintenance/maintenance.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { EventsComponent } from './components/administration/events/events.component';
import { AdvisoryComponent } from './components/administration/advisory/advisory.component';
import { GuestRoomComponent } from './components/facilities/guest-room/guest-room.component';
import { MessComponent } from './components/facilities/mess/mess.component';
import { ReadingRoomComponent } from './components/facilities/reading-room/reading-room.component';
import { TVRoomComponent } from './components/facilities/tvroom/tvroom.component';
import { ComputerRoomComponent } from './components/facilities/computer-room/computer-room.component';
import { SportsComponent } from './components/facilities/sports/sports.component';
import { MusicRoomComponent } from './components/facilities/music-room/music-room.component';
import { CanteenComponent } from './components/facilities/canteen/canteen.component';
import { PeopleComponent } from './components/people/people.component';
import { SGComponent } from './components/people/sg/sg.component';
import { AMComponent } from './components/people/am/am.component';
import { ClubSecyComponent } from './components/people/club-secy/club-secy.component';
import { ClubCoordiComponent } from './components/people/club-coordi/club-coordi.component';
import { ResponseComponent } from './components/feedback/response/response.component';
import { CsCoreComponent } from './components/people/cs-core/cs-core.component';
import { TopnewsComponent } from './components/topnews/topnews.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { LoginComponent } from './components/login/login.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    AboutComponent,
    FacilitiesComponent,
    AdministrationComponent,
    GalleryComponent,
    FeedbackComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    WardensComponent,
    HecComponent,
    MessCommitteeComponent,
    MaintenanceComponent,
    EventsComponent,
    GuestRoomComponent,
    MessComponent,
    ReadingRoomComponent,
    TVRoomComponent,
    ComputerRoomComponent,
    SportsComponent,
    MusicRoomComponent,
    CanteenComponent,
    PeopleComponent,
    SGComponent,
    AMComponent,
    ClubSecyComponent,
    ClubCoordiComponent,
    ResponseComponent,
    CsCoreComponent,
    TopnewsComponent,
    AdvisoryComponent,
    NewsComponent,
    AddNewsComponent,
    LoginComponent,
    TilesComponent,
    SignupComponent,
    DashboardComponent,
    QuickLinksComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [
    MainService,
    InfoService,
    FeedbackService,
    NewsService,
    UsersService,
    LevelGuard,
    UsersGuard,
    LogInGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
