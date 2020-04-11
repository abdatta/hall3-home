/* importing environment here */
import { environment } from '../environments/environment';

/* importing modules here */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LoaderModule } from './modules/loader/loader.module';
import { NgxAnalyticsModule } from 'ngx-analytics';
import { NgxAnalyticsGoogleAnalytics } from 'ngx-analytics/ga';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

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
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    FooterComponent,
    InfoComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoaderModule,
    RecaptchaV3Module,
    NgxAnalyticsModule.forRoot([NgxAnalyticsGoogleAnalytics])
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
    AdminGuard,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.reCaptchaKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
