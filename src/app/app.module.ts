/* importing modules here */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'angular-owl-carousel';
import { Ng2Carousel3dModule } from 'ng2-carousel-3d';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { InfoheadModule } from './components/infohead/infohead.module';
import { LoaderModule } from './components/loader/loader.module';
import { TilesModule } from './components/tiles/tiles.module';
import { NewsTileModule } from './components/news-tile/news-tile.module';

/* importing services here */
import { HttpClient } from './services/http.client';
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
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ResponseComponent } from './components/feedback/response/response.component';
import { ReportComponent } from './components/feedback/report/report.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { PeopleComponent } from './components/people/people.component';
import { TopnewsComponent } from './components/topnews/topnews.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AthComponent } from './components/feedback/ath/ath.component';
import { LnfComponent } from './components/feedback/lnf/lnf.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    AboutComponent,
    FacilitiesComponent,
    AdministrationComponent,
    FeedbackComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    PeopleComponent,
    ResponseComponent,
    TopnewsComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    MapComponent,
    ReportComponent,
    NotFoundComponent,
    AthComponent,
    LnfComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OwlModule,
    Ng2Carousel3dModule,
    AutoSizeInputModule,
    InfoheadModule,
    LoaderModule,
    TilesModule,
    NewsTileModule
  ],
  providers: [
    HttpClient,
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
